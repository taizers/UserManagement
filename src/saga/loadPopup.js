import actionCreators from "../reducer/actionCreators";
import { call, put, takeEvery } from "redux-saga/effects";
import { getUserData } from '../api/loadPopup';

function* watchLoadPopupData() {
    yield takeEvery('FETCHED_POPUP_DATA', loadPopupDataAsync);
};

function* loadPopupDataAsync({ payload }) {
    try {
        const popupData = yield call(getUserData, payload);
        yield put(actionCreators.CHANGE_ACTIVE_POPUP(popupData));
    } catch (error) {
        yield put(actionCreators.LOAD_DATA_FAILED(error.message));
    }
};

export default watchLoadPopupData;
