const express = require("express");
const mongoose = require("mongoose");
const app = express();
const env = require("dotenv").config();
const SignUp = require("./Routes/SignUp.route");
const getUsers = require("./Routes/Users.route");
const getUser = require("./Routes/user.route");
const loginUser = require("./Routes/Login.route");
const cors = require("cors");
const Posts = require("./Routes/Posts");
app.use(express.json());

//mongoose
const connect = mongoose.connect(process.env.DATABASE_URI, {
	useUnifiedTopology: true,
	useNewUrlParser: true,
});
const db = mongoose.connection;
db.on("error", (err) => {
	message: err.message;
});
db.once("open", () => {
	console.log("Connected to database");
});
app.use(cors());
app.options("*", cors());

//routes
const SignUpRoute = SignUp;
app.use("/register", SignUpRoute);

const getUsersData = getUsers;
app.use("/users", getUsersData);

const getUserData = getUser;
app.use("/user", getUserData);

const login = loginUser;
app.use("/login", login);

const PostsData = Posts;
app.use("/Posts", PostsData);
//listen
app.listen(5000, () => {
	console.log("server is up and running on port 5000");
});
