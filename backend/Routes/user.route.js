const router = require("express").Router();
const User = require("../models/user.model");

router.get("/:id", async (req, res) => {
	const id = req.params.id;
	try {
		const user = await User.findById(id);
		res.send(user);
		console.log(user);
	} catch (error) {
		res.send({ message: error.message });
	}
});

module.exports = router;
