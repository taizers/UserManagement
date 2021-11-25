import actionCreators from "../reducer/actionCreators";
import { call, put, takeEvery } from "redux-saga/effects";
import { updateUser } from '../api/updateUser'

function* watchPushData() {
    yield takeEvery('PUSHED_DATA', pushDataAsync);
};

function* pushDataAsync({ payload }) {
    try {
        const popup = yield call(updateUser, payload);
        yield put(actionCreators.CHANGE_ACTIVE_POPUP(popup));
        yield put(actionCreators.FETCHED_DATA(payload.page));
    } catch (error) {
    }
};

export default watchPushData;
