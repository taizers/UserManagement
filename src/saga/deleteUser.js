import { createUserFailed } from "../reducer/actionCreators";
import { call, put, takeEvery } from "redux-saga/effects";
import { deleteUser } from '../api/deleteUser'

function* watchDeleteUser() {
    yield takeEvery('DELETE_USER', deleteDataAsync);
}

function* deleteDataAsync({ payload }) {
    try {
        yield call(deleteUser, payload);
    } catch (error) {
        yield put(createUserFailed(error.message));
    }
}

export default watchDeleteUser;