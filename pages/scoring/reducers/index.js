import { combineReducers } from "redux";
import { pageSettingsReducer }  from "./PageSettingsReducer";
import { itemsReducer }  from "./ItemsReducer";
 
export default combineReducers({
    page: pageSettingsReducer,
    items: itemsReducer,
});
