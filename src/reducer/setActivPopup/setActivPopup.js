import { actionType } from "../../consts";
import { call, put, takeEvery  } from "redux-saga/effects";
import axios from 'axios';

const initialState = {
    currentActivePupup: null,
};


function* watchPushData() {
    yield takeEvery('PUSHED_DATA',pushDataAsync);
};

function* pushDataAsync(action) {
    try {
        const data = action.payload.data;
        const popup = action.payload.popup;
        const res = yield call(() => {
            return axios.post("https://reqres.in/api/users/" + popup.id, {
                title: "https://reqres.in/api/users/" + popup.id,
                body: data
            })
            .then(response => response.data)
        }) 

        yield popup.createdAt = res.createdAt;
        yield put(ActionCreators.CHANGE_ACTIVE_POPUP(popup));
    } catch (error) {
    }
};

const ActionCreators = {
    CHANGE_ACTIVE_POPUP: (currentActivePupupData) =>{
        return {
            type: actionType.CHANGE_ACTIVE_POPUP,
            payload: currentActivePupupData
        }
    },
    PUSHED_DATA: (data, popup) =>{
        return {
            type: actionType.PUSHED_DATA,
            payload: {
                data: data,
                popup: popup,
            },
        }
    },   
};

const reducer = (state = initialState, action) =>{
    switch (action.type) {
        case actionType.CHANGE_ACTIVE_POPUP:
            return Object.assign({}, state, {
                currentActivePupup: action.payload,
                error: false,
            });
        default:
            return state;
    }
};

export {reducer, ActionCreators, watchPushData}; 
