import { combineReducers } from "redux";
import {
  userReducer,
  profileReducer,
  forgotPasswordReducer,
} from "../reducers/auth.reducer";
const rootReducer = combineReducers({
  userReducer: userReducer,
  profile: profileReducer,
  forgotPassword: forgotPasswordReducer,
});

export default rootReducer;
