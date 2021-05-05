const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
var SALT_WORK_FACTOR = 10;
const jwt = require("jsonwebtoken");
const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		lowercase: true,
	},
	email: {
		type: String,
		trim: true,
		required: "Email address is required",
		index: { unique: true },
	},
	password: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});
userSchema.pre("save", function (next) {
	var user = this;
	if (!user.isModified("password")) return next();

	bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
		if (err) return next(err);
		bcrypt.hash(user.password, salt, function (err, hash) {
			if (err) return next(err);
			// override the cleartext password with the hashed one
			user.password = hash;
			next();
		});
	});
});

userSchema.methods.comparePassword = function (candidatePassword, cb) {
	bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
		if (err) return cb(err);
		cb(null, isMatch);
	});
};

userSchema.methods.getSignedToken = function () {
	return jwt.sign({ id: this._id }, "Secret");
};

module.exports = mongoose.model("User", userSchema);
