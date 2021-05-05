const initState = { userData: [] };

export const userDataReducer = (state = initState, action) => {
	switch (action.type) {
		case "USER_DATA_REQUEST":
			return { ...state, loading: true };
		case "USER_DATA_SUCESS":
			return {
				...state,
				userData: action.payload,
				loading: false,
			};
		case "USER_DATA_FAIL":
			return { state, loading: true };
		default:
			return { state };
	}
};
