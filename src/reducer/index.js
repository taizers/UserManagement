import { combineReducers } from "redux";
import {reducer as loadData} from './loadData/loadData';
import {reducer as setActivPopup} from './setActivPopup/setActivPopup';

const reducer =  combineReducers({
    loadData,
    setActivPopup,
});

export default reducer;
