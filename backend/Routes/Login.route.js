const router = require("express").Router();
const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
router.post("/", (req, res) => {
	const user = {
		emailAddress: req.body.email,
		passowrd: req.body.password,
	};

	try {
		checkUser(user.emailAddress, user.passowrd, res);
	} catch (error) {
		res.json({ message: error.message });
	}
});

async function checkUser(emailAddress, password, res) {
	const dbUser = await User.findOne({ email: emailAddress });

	if (emailAddress === dbUser.email) {
		const match = await bcrypt.compare(
			password,
			dbUser.password,

			function (err, result) {
				if (result === true) {
					sendToken(dbUser, res);
				} else {
					res.json({ message: "Wrong username or password" });
				}
			}
		);
	}
}
const sendToken = (dbUser, res) => {
	const token = dbUser.getSignedToken();
	res.json({ message: "Success", token });
};

module.exports = router;
