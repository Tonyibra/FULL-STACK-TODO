import { combineReducers } from "redux";
import { registerReducer } from "../features/RegisterReducer";
import { loginReducer } from "../features/loginReducer";
import { userDataReducer } from "../features/userDataReducer";
const rootReducer = combineReducers({
	RegisterData: registerReducer,
	loginData: loginReducer,
	userData: userDataReducer,
});

export default rootReducer;
