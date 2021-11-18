import { pathLinks } from "./consts";
import { useNavigate } from "react-router";

/*   return api.get()
.then((response) =>{
    dispatch(ActionCreators.LOAD_DATA(response.data));
    dispatch(ActionCreators.LOAD_TOTAL_PAGES(response.total_pages));
}); */

const initialState = {
    currentActivePupup: null,
    currentPage: null,
    currentCardsData: null,
    pages: null,
    loading: false,
    error: false,
};

const actionType = {
    CHANGE_ACTIVE_POPUP: 'CHANGE_ACTIVE_POPUP',
    CHANGE_ACTIVE_PAGE: 'CHANGE_ACTIVE_PAGE',
    LOAD_DATA: 'LOAD_DATA',
    LOAD_TOTAL_PAGES: 'LOAD_TOTAL_PAGES',
    LOAD_DATA_SUCCEEDED: 'LOAD_DATA_SUCCEEDED',
    LOAD_DATA_FAILED: 'LOAD_DATA_FAILED',
};

const Operation = {
    loadData: (page) => (dispatch, _getState) => {

        dispatch(ActionCreators.LOAD_DATA());
        fetch("https://reqres.in/api/users?page=" + page)
            .then((response) => response.json())
            .then((data) =>{
                dispatch(ActionCreators.LOAD_TOTAL_PAGES(data.total_pages));
                dispatch(ActionCreators.CHANGE_ACTIVE_PAGE(data.page));
                dispatch(ActionCreators.LOAD_DATA_SUCCEEDED(data.data));
            })
            .catch(() => {
                dispatch(ActionCreators.LOAD_DATA_FAILED());
            });
    },
    uptateServerData: (formData, id) => (dispatch, _getState) => {

        fetch("https://reqres.in/api/users/" + id, {
            method: 'POST',
            body: formData
            })
        .then(response => console.log(response.data +"fffffffffffff"))
        .catch(() => {
            const navigate = useNavigate();
            navigate(pathLinks.error);
        });
    },
};

const ActionCreators = {
    CHANGE_ACTIVE_POPUP: (currentActivePupupData) =>{
        return {
            type: actionType.CHANGE_ACTIVE_POPUP,
            payload: currentActivePupupData
        }
    },       

    CHANGE_ACTIVE_PAGE: (currentPage) =>{
        return {
            type: actionType.CHANGE_ACTIVE_PAGE,
            payload: currentPage
        }
    }, 
    LOAD_DATA : () =>{
        return {
            type: actionType.LOAD_DATA,
        }
    },
    LOAD_DATA_SUCCEEDED : (users) =>{
        return {
            type: actionType.LOAD_DATA_SUCCEEDED,
            payload: users
        }
    },
    LOAD_DATA_FAILED : () =>{
        return {
            type: actionType.LOAD_DATA_FAILED,
        }
    },


    LOAD_TOTAL_PAGES : (totalPages) =>{

        const list = Array(totalPages).fill(1).map((e,i)=> i + 1);

        return {
            type: actionType.LOAD_TOTAL_PAGES,
            payload: list
        }
    }

};

const reducer = (state = initialState, action) =>{
    switch (action.type) {
        case actionType.CHANGE_ACTIVE_POPUP:
            return Object.assign({}, state, {
                currentActivePupup: action.payload
            });

        case actionType.CHANGE_ACTIVE_PAGE:
            return Object.assign({}, state, {
                currentPage: action.payload
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
                error: true,
            });
        case actionType.LOAD_TOTAL_PAGES:
            return Object.assign({}, state, {
                pages: action.payload
            });
        default:
            return state;
    }
};

export {reducer, ActionCreators, Operation}; 