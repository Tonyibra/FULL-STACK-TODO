import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
const Dashboard = () => {
	const parseJwt = (token) => {
		try {
			return JSON.parse(atob(token.split(".")[1]));
		} catch (e) {
			return null;
		}
	};

	useEffect(() => {
		getUser();
	}, []);

	const getUser = () => {
		let userToken = localStorage.getItem("token");
		const id = parseJwt(userToken).id;
		
	};

	return (
		<Nav>
			<Logo>TODO LIST</Logo>
			<User>User</User>
		</Nav>
	);
};

export default Dashboard;

const Container = styled.div`
	display: flex;
	width: 100%;
	height: calc(100vh - 70px);
`;
const Nav = styled.nav`
	height: 70px;
	width: 100%;
	background-color: black;
	color: white;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
const Logo = styled.h3`
	font-size: 16px;
	padding: calc(2vw + 5px);
	font-weight: 500 !important;
`;
const User = styled.h2`
	font-size: 16px;
	padding: calc(2vw + 5px);
	font-weight: 500 !important;
	cursor: pointer;
`;
