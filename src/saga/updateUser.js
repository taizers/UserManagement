import { requestForData, changeActivePopup, loadDataFailed } from "../reducer/actionCreators";
import { call, put, takeEvery } from "redux-saga/effects";
import { updateUser } from '../api/updateUser'

function* watchPushData() {
    yield takeEvery('PUSHED_DATA', pushDataAsync);
};

function* pushDataAsync({ payload }) {
    try {
        yield call(updateUser, payload);
    } catch (error) {
        yield put(loadDataFailed(error.message));
    }
};

export default watchPushData;
