import { combineReducers } from "redux";
import { pageSettingsReducer }  from "./PageSettingsReducer";
import { answersReducer }  from "./answersReducer";
 
export default combineReducers({
    page: pageSettingsReducer,
    answers: answersReducer,
});
