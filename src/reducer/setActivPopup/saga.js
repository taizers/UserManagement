import actionCreators from "../actionCreators";
import { call, put, takeEvery } from "redux-saga/effects";
import axios from 'axios';

function* watchPushData() {
    yield takeEvery('PUSHED_DATA', pushDataAsync);
};

function* pushDataAsync(action) {
    try {
        const data = action.payload.data;
        const popup = action.payload.popup;
        const res = yield call(() => {
            return axios.put("https://reqres.in/api/users/" + popup.id, {
                title: "https://reqres.in/api/users/" + popup.id,
                body: data
            })
                .then(response => response.data)
        })
        yield popup.updatedAt = res.updatedAt;
        yield put(actionCreators.CHANGE_ACTIVE_POPUP(popup));
    } catch (error) {
    }
};

export default watchPushData;
