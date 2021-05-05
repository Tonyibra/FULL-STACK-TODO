const router = require("express").Router();
const User = require("../models/user.model");
router.post("/", async (req, res) => {
	const user = {
		name: req.body.name,
		email: req.body.email,
		password: req.body.password,
	};

	try {
		const newUser = new User({
			name: user.name,
			email: user.email,
			password: user.password,
		});
		const registerUser = await newUser.save();
		RegisterToken(registerUser, res);
		res.send(newUser);
	} catch (err) {
		res.json({ message: err.message });
	}
});
const RegisterToken = (registerUser, res) => {
	const token = registerUser.getSignedToken();
	res.json({ message: "Success", token, registerUser });
};
module.exports = router;
