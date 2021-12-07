import { combineReducers } from "redux";
import { reducer as loadData } from './loadData/loadData';
import { reducer as singIn } from './singIn/singIn';
import { reducer as setActivPopup } from './setActivPopup/setActivPopup';
import { reducer as changeCurrentPage } from './changeCurrentPage/changeCurrentPage';

const reducer = combineReducers({
    loadData,
    setActivPopup,
    changeCurrentPage,
    singIn,
});

export default reducer;
