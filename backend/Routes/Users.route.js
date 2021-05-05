const router = require("express").Router();
const User = require("../models/user.model");
router.get("/", async (req, res) => {
	try {
		const allUsers = await User.find();
		res.send(allUsers);
	} catch (error) {
		res.send({ message: error.message });
	}
});

module.exports = router;
