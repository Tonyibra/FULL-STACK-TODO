import axios from "axios";
export const registerNewUser = (name, email, password) => async (dispatch) => {
	const REGISTER_URL = "http://localhost:5000/register";
	try {
		dispatch({ type: "POST_REQUEST" });
		const res = await axios.post(REGISTER_URL, {
			name,
			email,
			password,
		});
		dispatch({ type: "POST_REQUEST_SUCCESS", payload: res });
		localStorage.setItem("token", res.data.token);
	} catch (error) {
		dispatch({ type: "POST_REQUEST_FAIL" });
		console.log(error);
	}
};
