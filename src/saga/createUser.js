import { createUserFailed, createUserSuccessed } from "../reducer/actionCreators";
import { call, put, takeEvery } from "redux-saga/effects";
import { createUser } from '../api/createUser'

function* watchCreateUser() {
    yield takeEvery('CREATE_USER', pushDataAsync);
}

function* pushDataAsync({ payload }) {
    try {
        yield call(createUser, payload);
        yield put(createUserSuccessed());
    } catch (error) {
        yield put(createUserFailed(error.message));
    }
}

export default watchCreateUser;