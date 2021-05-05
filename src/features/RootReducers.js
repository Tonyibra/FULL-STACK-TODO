import { combineReducers } from "redux";
import { registerReducer } from "../features/RegisterReducer";
import { loginReducer } from "../features/loginReducer";
const rootReducer = combineReducers({
	RegisterData: registerReducer,
	loginData: loginReducer,
});

export default rootReducer;
