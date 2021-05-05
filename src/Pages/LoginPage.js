import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button, Input } from "@material-ui/core";
import { login } from "../features/loginActions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
const LoginPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [userId, setUserId] = useState("");
	const dispatch = useDispatch();
	const history = useHistory();
	const { data } = useSelector((state) => state.loginData);
	const getLoginMail = (e) => {
		setEmail(e.target.value);
	};
	const getLoginPassword = (e) => {
		setPassword(e.target.value);
	};

	const loginHandler = (e) => {
		e.preventDefault();
		dispatch(login(email, password));
		let token = localStorage.getItem("token");
		// if (data.token && data.token !== token) {
		// 	history.push("/login");
		// } else {
		// 	history.push("/profile");
		// }
		console.log(data);
	};

	useEffect(() => {
		if (localStorage.getItem("token")) {
			history.push("/profile");
		}
	}, []);

	return (
		<Container>
			<Wrap>
				<Input
					value={email}
					className="input"
					type="email"
					placeholder="Email"
					onChange={getLoginMail}
				/>
				<Input
					value={password}
					className="input"
					type="password"
					placeholder="Password"
					onChange={getLoginPassword}
				/>
				<Button onClick={loginHandler}>Login</Button>
			</Wrap>
		</Container>
	);
};

export default LoginPage;

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
		margin: 1rem;
	}
`;
