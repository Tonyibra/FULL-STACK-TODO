const initialSate = { loginInfo: {} };

export const loginReducer = (state = initialSate, action) => {
	switch (action.type) {
		case "LOGIN_REQUEST":
			return {
				...state,
				loginInfo: action.payload,
			};
		case "LOGIN_REQUEST_SUCCESS":
			return {
				...state,
				loginInfo: action.payload,
			};
		case "LOGIN_REQUEST_FAIL":
			return {
				state,
			};

		default:
			return state;
	}
};
