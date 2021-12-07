import { loadUserSuccessed, loadUserFailed } from "../reducer/actionCreators";
import { call, put, takeEvery } from "redux-saga/effects";
import { signUpUser } from '../api/signUp';

function* watchSignUpUser() {
    yield takeEvery('SING_UP_USER', loadUserAsync);
}

function* loadUserAsync({ payload }) {
    try {
        const usersData = yield call(signUpUser, payload.data);
        yield put(loadUserSuccessed(usersData));
        yield payload.history('/home');
    } catch (error) {
        yield put(loadUserFailed(error.message));
    }
}

export default watchSignUpUser;