import actionCreators from "../reducer/actionCreators";
import { call, put, takeEvery } from "redux-saga/effects";
import { getUsersData } from '../api/loadData';

function* watchFetchData() {
    yield takeEvery('FETCHED_DATA', loadUsersData);
};

function* loadUsersData({ payload }) {
    try {
        yield put(actionCreators.LOAD_DATA());
        const data = yield call(getUsersData, payload);
        yield put(actionCreators.LOAD_TOTAL_PAGES(Array(data.totalPages).fill(1).map((e, i) => i + 1)));
        yield put(actionCreators.LOAD_DATA_SUCCEEDED(data.data));
    } catch (error) {
        yield put(actionCreators.LOAD_DATA_FAILED(error));
    }
};

export default watchFetchData;
