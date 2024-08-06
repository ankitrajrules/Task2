const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

router.post("/login", async (req, res) => {
	const { username, password } = req.body;
	let usernameStored = process.env.USER;
	console.log(username, password);
	let passwordStored = process.env.PASSWORD;
	const user = { userId: usernameStored, password: passwordStored };

	if (username !== usernameStored)
		return res.status(400).send("Invalid username or password1.");

	const validPassword = password == passwordStored;

	if (!validPassword)
		return res.status(400).send("Invalid username or password.");

	const token = jwt.sign({ userId: user.id }, process.env.SECRET_KEY);

	res.send({ token });
});

module.exports = router;
