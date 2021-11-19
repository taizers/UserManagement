import { pathLinks } from "./consts";
import { useNavigate } from "react-router";
import { call, put, takeEvery  } from "redux-saga/effects";
import axios from 'axios';
import { actionType } from "./consts";

const initialState = {
    currentActivePupup: null,
    currentPage: null,
    currentCardsData: null,
    pages: null,
    loading: false,
    error: false,
};

function* watchFetchData() {
    yield takeEvery('FETCHED_DATA',fetchDataAsync);
};

function* watchPushData() {
    yield takeEvery('PUSHED_DATA',pushDataAsync);
}

const adapter = (users) => {
    const usersList = [];
    users.forEach(( card ) => {
        usersList.push({
            id: card.id,
            email: card.email,
            name: card.name,
            first_name: card.first_name,
            last_name: card.last_name,
            avatar: card.avatar,
            createdAt: false,
        })
    });
    return usersList;
};

function* fetchDataAsync(action) {
    try {
        yield put(ActionCreators.LOAD_DATA());
        const data = yield call(() => {
            return axios.get("https://reqres.in/api/users?page=" + action.payload)
            .then(response => response.data)
        }) 
        yield put(ActionCreators.LOAD_TOTAL_PAGES(data.total_pages));
        yield put(ActionCreators.LOAD_DATA_SUCCEEDED(adapter(data.data)));
    } catch (error) {
        yield put(ActionCreators.LOAD_DATA_FAILED(error));
    }
};

function* pushDataAsync(action) {
    try {
        const data = action.payload.data;
        const popup = action.payload.popup;
        const page = action.payload.page;
        const res = yield call(() => {
            return axios.post("https://reqres.in/api/users/" + popup.id, {
                title: "https://reqres.in/api/users/" + popup.id,
                body: data
            })
            .then(response => response.data)
        }) 

        yield popup.createdAt = res.createdAt;
        yield put(ActionCreators.CHANGE_ACTIVE_POPUP(popup));
        //yield put(ActionCreators.FETCHED_DATA(page));
    } catch (error) {
        yield put(ActionCreators.LOAD_DATA_FAILED(error));
    }
};

const ActionCreators = {
    CHANGE_ACTIVE_POPUP: (currentActivePupupData) =>{
        return {
            type: actionType.CHANGE_ACTIVE_POPUP,
            payload: currentActivePupupData
        }
    },
    CHANGE_POPUP_DATE: (currentActivePupupData) =>{
        return {
            type: actionType.CHANGE_POPUP_DATE,
            payload: currentActivePupupData
        }
    },
    FETCHED_DATA: (currentPage) =>{ //для запросов
        return {
            type: actionType.FETCHED_DATA,
            payload: currentPage,
        }
    },   
    PUSHED_DATA: (data, page, popup) =>{ //для запросов
        return {
            type: actionType.PUSHED_DATA,
            payload: {
                data: data,
                page: page,
                popup: popup,
            },
        }
    },   
    LOAD_DATA : (number) =>{
        return {
            type: actionType.LOAD_DATA,
            payload: number,
        }
    },
    LOAD_DATA_SUCCEEDED : (users) =>{
        return {
            type: actionType.LOAD_DATA_SUCCEEDED,
            payload: users,
        }
    },
    LOAD_DATA_FAILED : (error) =>{
        return {
            type: actionType.LOAD_DATA_FAILED,
            payload: error,
        }
    },
    LOAD_TOTAL_PAGES : (totalPages) =>{
        const list = Array(totalPages).fill(1).map((e,i)=> i + 1);

        return {
            type: actionType.LOAD_TOTAL_PAGES,
            payload: list,
        }
    }

};

const reducer = (state = initialState, action) =>{
    switch (action.type) {
        case actionType.CHANGE_ACTIVE_POPUP:
            return Object.assign({}, state, {
                currentActivePupup: action.payload,
            });
        case actionType.CHANGE_POPUP_DATE:
            return Object.assign({}, state, {
                currentActivePupup: action.payload,
            });
        case actionType.FETCHED_DATA:
            return Object.assign({}, state, {
                currentPage: action.payload,
            });
        case actionType.LOAD_DATA:
            return Object.assign({}, state, {
                currentCardsData: null,
                loading: true,
                error: false,
            });
        case actionType.LOAD_DATA_SUCCEEDED:
            return Object.assign({}, state, {
                currentCardsData: action.payload,
                loading: false,
                error: false,
            });
        case actionType.LOAD_DATA_FAILED:
            return Object.assign({}, state, {
                currentCardsData: null,
                loading: false,
                error: action.payload,
            });
        case actionType.LOAD_TOTAL_PAGES:
            return Object.assign({}, state, {
                pages: action.payload
            });
        default:
            return state;
    }
};

export {reducer, ActionCreators, watchFetchData, watchPushData}; 