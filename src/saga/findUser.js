import { loadDataSuccessed, loadDataFailed } from "../reducer/actionCreators";
import { call, put, takeEvery } from "redux-saga/effects";
import { findUserData } from '../api/findUser';

function* watchFindData() {
    yield takeEvery('FIND_USER', findUserDataAsync);
}

function* findUserDataAsync({ payload }) {
    try {
        const usersData = yield call(findUserData, payload);
        if (usersData[0] != null) {
            yield console.log(usersData);
            yield put(loadDataSuccessed(usersData, Array.from({ length: 1 }, (_,i) => ( i + 1 ))));
        }else {
            yield put(loadDataFailed("Сотрудник не найден"));
        }
    } catch (error) {
        yield put(loadDataFailed(error.message));
    }
}

export default watchFindData;