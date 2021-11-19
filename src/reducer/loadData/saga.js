import actionCreators from "../actionCreators";
import { call, put, takeEvery } from "redux-saga/effects";
import axios from 'axios';

function* watchFetchData() {
    yield takeEvery('FETCHED_DATA', fetchDataAsync);
};

const adapter = (users) => {
    const usersList = [];
    users.forEach((card) => {
        usersList.push({
            id: card.id,
            email: card.email,
            name: card.name,
            first_name: card.first_name,
            last_name: card.last_name,
            avatar: card.avatar,
            updatedAt: false,
        })
    });
    return usersList;
};

function* fetchDataAsync(action) {
    try {
        yield put(actionCreators.LOAD_DATA());
        const data = yield call(() => {
            return axios.get("https://reqres.in/api/users?page=" + action.payload)
                .then(response => response.data)
        })
        yield put(actionCreators.LOAD_TOTAL_PAGES(Array(data.total_pages).fill(1).map((e, i) => i + 1)));
        yield put(actionCreators.LOAD_DATA_SUCCEEDED(adapter(data.data)));
    } catch (error) {
        yield put(actionCreators.LOAD_DATA_FAILED(error.message));
    }
};

export default watchFetchData;