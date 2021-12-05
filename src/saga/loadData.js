import { loadDataSuccessed, loadDataFailed } from "../reducer/actionCreators";
import { call, put, takeEvery } from "redux-saga/effects";
import { getUsersData } from '../api/loadData';

function* watchFetchData() {
    yield takeEvery('LOAD_DATA', loadUsersDataAsync);
}

function* loadUsersDataAsync({ payload }) {
    try {
        const usersData = yield call(getUsersData, payload);
        yield put(loadDataSuccessed(usersData.data, Array.from({ length: usersData.totalPages }, (_,i) => ( i + 1 ))));
    } catch (error) {
        yield put(loadDataFailed(error.message));
    }
}

export default watchFetchData;
