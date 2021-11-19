import { actionType } from "../../consts";
import { call, put, takeEvery  } from "redux-saga/effects";
import axios from 'axios';

const initialState = {
    currentPage: null,
    currentCardsData: null,
    pages: null,
    loading: false,
    error: false,
};

function* watchFetchData() {
    yield takeEvery('FETCHED_DATA',fetchDataAsync);
};

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
        yield put(ActionCreators.LOAD_TOTAL_PAGES( Array(data.total_pages).fill(1).map((e, i)=> i + 1) ));
        yield put(ActionCreators.LOAD_DATA_SUCCEEDED(adapter(data.data)));
    } catch (error) {
        yield put(ActionCreators.LOAD_DATA_FAILED(error));
    }
};

const ActionCreators = {
    FETCHED_DATA: (currentPage) =>{
        return {
            type: actionType.FETCHED_DATA,
            payload: currentPage,
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
    LOAD_TOTAL_PAGES : (pagesList) =>{
        return {
            type: actionType.LOAD_TOTAL_PAGES,
            payload: pagesList,
        }
    }
};

const reducer = (state = initialState, action) =>{
    switch (action.type) {
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

export {reducer, ActionCreators, watchFetchData}; 
