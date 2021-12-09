import { loadAllAboutUserSuccessed, loadDataFailed } from "../reducer/actionCreators";
import { call, put, takeEvery } from "redux-saga/effects";
import { loadAllUserData } from '../api/loadAllUserData';
import { pathLinks } from "../consts";
import { generatePath } from "react-router";

function* watchFethDataAboutUser() {
    yield takeEvery('LOAD_ALL_ABOUT_USER', loadAllUserDataAsync);
}

function* loadAllUserDataAsync({ payload }) {
    try {
        const path = generatePath(pathLinks.allAboutUser, {id: payload.data})
        const usersData = yield call(loadAllUserData, payload.data);

        if (usersData) {
            yield put(loadAllAboutUserSuccessed(usersData));
            yield payload.history(path);
        }else {
            yield put(loadDataFailed("Пользователь не найден, либо не правильный пароль"));
        }
    } catch (error) {
        yield put(loadDataFailed(error.message));
    }
}

export default watchFethDataAboutUser;