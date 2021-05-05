const initialSate = { details: {} };

export const registerReducer = (state = initialSate, action) => {
	switch (action.type) {
		case "POST_REQUEST":
			return {
				...state,
				details: "test",
			};
		case "POST_REQUEST_SUCCESS":
			return {
				...state,
				details: action.payload,
			};
		case "POST_REQUEST_FAIL":
			return {
				state,
			};

		default:
			return state;
	}
};
