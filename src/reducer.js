import { pathLinks } from "./consts";
import { useNavigate } from "react-router";

const initialState = {
    currentActivePupup: {},
    currentPage: 1,
    currentCarsData: [],
    pages: [],
};

const actionType = {
    CHANGE_ACTIVE_POPUP: 'CHANGE_ACTIVE_POPUP',
    CHANGE_ACTIVE_PAGE: 'CHANGE_ACTIVE_PAGE',
    CHANGE_USER_DATA: 'CHANGE_USER_DATA',
    CHANGE_CARDS_DATA: 'CHANGE_CARDS_DATA',
    LOAD_DATA: 'LOAD_DATA',
    LOAD_TOTAL_PAGES: 'LOAD_TOTAL_PAGES',
};

const Operation = {
    loadData: (page) => (dispatch, _getState, api) => {
        /*   return api.get()
        .then((response) =>{
            dispatch(ActionCreators.LOAD_DATA(response.data));
            dispatch(ActionCreators.LOAD_TOTAL_PAGES(response.total_pages));
        }); */
        fetch("https://reqres.in/api/users?page=" + page)
            .then((response) => response.json())
            .then((data) =>{
                dispatch(ActionCreators.LOAD_DATA(data.data));
                dispatch(ActionCreators.LOAD_TOTAL_PAGES(data.total_pages));
            })
            .catch(() => {
                const navigate = useNavigate();
                navigate(pathLinks.error);
            });
        },
    changeData: (page) => (dispatch, _getState, api) => {

        fetch("https://reqres.in/api/users?page=" + page)
            .then((response) => response.json())
            .then((data) =>{
                dispatch(ActionCreators.LOAD_DATA(data.data));
            })
            .catch(() => {
                const navigate = useNavigate();
                navigate(pathLinks.error);
            });
    },
    uptateServerData: (formData, id) => (dispatch, _getState, api) => {

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
    CHANGE_USER_DATA: (changedPopup) =>{

        return {
            type: actionType.CHANGE_ACTIVE_POPUP,
            payload: changedPopup
        }
    },
    LOAD_DATA : (users) =>{

        return {
            type: actionType.LOAD_DATA,
            payload: users
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
            Operation.loadData();
            return Object.assign({}, state, {
                currentPage: action.payload
            });
  /*       case actionType.CHANGE_CARDS_DATA:
            return Object.assign({}, state, {
                currentCarsData: action.payload
            }); */
        case actionType.LOAD_DATA:
            return Object.assign({}, state, {
                currentCarsData: action.payload
            });

        case actionType.LOAD_TOTAL_PAGES:
            return Object.assign({}, state, {
                pages: action.payload
            });
        default:
            break;
    }
    return state;
};

export {reducer, ActionCreators, Operation}; 