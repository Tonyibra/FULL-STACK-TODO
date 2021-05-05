import React from "react";
import "./App.css";
import { Route, Switch, useLocation } from "react-router-dom";
import RegisterPage from "./Pages/RegisterPage";
import LoginPage from "./Pages/LoginPage";
import Dashboard from "./Pages/Dashboard";
import PrivateRoute from "./routing/PrivateRoute";
function App() {
	const location = useLocation();
	return (
		<div className="App">
			<Switch location={location} key={location.key}>
				<PrivateRoute path="/profile" component={Dashboard} exact={true} />
				<Route path="/register" exact={true}>
					<RegisterPage />
				</Route>
				<Route path="/login" exact={true}>
					<LoginPage />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
