exports.getPrivateData = (req, res, next) => {
	res.status(200).json({
		success: true,
		data: "You Get access to private data in this route",
	});
};
