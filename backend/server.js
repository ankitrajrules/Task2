const express = require("express");
const authRoutes = require("./routes/auth");
const cors = require("cors"); // Import the CORS middleware
require("dotenv").config();

const app = express();
const PORT = 8080;

app.use(cors()); // Use CORS middleware to allow requests from the frontend
app.use(express.json());
app.use("/api/auth", authRoutes); // All the routes defined in auth.js will be prefixed with /api/auth

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
