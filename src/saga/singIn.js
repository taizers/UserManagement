import { loadUserSuccessed, loadUserFailed } from "../reducer/actionCreators";
import { call, put, takeEvery } from "redux-saga/effects";
import { loadUser } from '../api/loadUser';

function* watchFetchUser() {
    yield takeEvery('SING_IN_USER', loadUserAsync);
}

function* loadUserAsync({ payload }) {
    try {
        const usersData = yield call(loadUser, payload);
        if (usersData) {
            yield put(loadUserSuccessed(usersData));
        }else {
            yield put(loadUserFailed("Пользователь не найден, либо не правильный пароль"));
        }
    } catch (error) {
        yield put(loadUserFailed(error.message));
    }
}

export default watchFetchUser;