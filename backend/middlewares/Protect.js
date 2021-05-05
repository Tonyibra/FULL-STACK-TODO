const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

exports.protect = async (req, res, next) => {
	let token;

	if (
		req.headers.authorization &&
		req.headers.authorization.startsWith("Bearer")
	) {
		token = req.headers.authorization.split(" ")[1];
	}

	if (!token) {
		res.json("Not authorized to access this route ");
	}

	try {
		const decoded = jwt.verify(token, "Secret");
		const user = await User.findById(decoded.id);

		if (!user) {
			res.json("Token not Valid for this ID");
		}
		req.user = user;
		next();
	} catch (error) {}
};
