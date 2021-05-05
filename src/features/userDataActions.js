import axios from "axios";

export const getUserData = (id) => async (dispatch) => {
	const url = `http://localhost:5000/user/${id}`;
	try {
		dispatch({ type: "USER_DATA_REQUEST" });
		const res = await axios.get(url);
		dispatch({ type: "USER_DATA_SUCESS", payload: res.data });
	} catch (error) {
		dispatch({ type: "USER_DATA_FAIL" });
	}
};
