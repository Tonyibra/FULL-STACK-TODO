import axios from "axios";
export const login = (email, password) => async (dispatch) => {
	const LOGIN_URL = "http://localhost:5000/login";
	try {
		dispatch({ type: "LOGIN_REQUEST" });
		const loginResponse = await axios.post(LOGIN_URL, { email, password });
		localStorage.setItem("token", loginResponse.data.token);
		dispatch({ type: "LOGIN_REQUEST_SUCCESS", payload: loginResponse.data });
	} catch (error) {
		dispatch({ type: "LOGIN_REQUEST_FAIL", payload: error });
	}
};
