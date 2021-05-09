import { combineReducers } from "redux";
import { account } from "user/reducers/getUser";

export default combineReducers({
    // User
    account,
});