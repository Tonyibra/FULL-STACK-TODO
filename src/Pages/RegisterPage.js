import React, { useState } from "react";
import { Button, Input } from "@material-ui/core";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { registerNewUser } from "../features/registerActions";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
const RegisterPage = () => {
	const { data } = useSelector((state) => state.RegisterData.details);
	const [username, setUserName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();
	const history = useHistory();
	const getUserName = (e) => {
		setUserName(e.target.value);
	};
	const getPassword = (e) => {
		setPassword(e.target.value);
	};
	const getEmail = (e) => {
		setEmail(e.target.value);
	};

	const submitData = (e) => {
		e.preventDefault();
		dispatch(registerNewUser(username, email, password));
		setUserName("");
		setPassword("");
		setEmail("");
		let token = localStorage.getItem("token");
		if (data.token && data.token !== token) {
			history.push("/login");
		} else {
			history.push("/profile");
		}
	};
	return (
		<Container>
			<Wrap>
				<h2>Register</h2>
				<Input
					value={username}
					onChange={getUserName}
					className="input"
					type="text"
					placeholder="Full Name..."
				/>
				<Input
					value={email}
					onChange={getEmail}
					className="input"
					type="email"
					placeholder="Email Address..."
				/>
				<Input
					value={password}
					onChange={getPassword}
					className="input"
					type="password"
					placeholder="Password"
				/>
				<Button onClick={submitData} color="primary">
					Register
				</Button>
				<span>
					Already Registered?<Link to="/login">Login</Link>{" "}
				</span>
			</Wrap>
		</Container>
	);
};

export default RegisterPage;

const Container = styled.div`
	display: flex;
	width: 100%;
	height: 100vh;
	align-items: center;
	justify-content: center;
`;
const Wrap = styled.div`
	display: flex;
	flex-direction: column;

	.input {
		margin: 0.6rem 0rem;
	}
	button {
		margin: 1rem;
	}
`;
