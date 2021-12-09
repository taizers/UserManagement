import { actionType } from "../../consts";

const initialState = {
    currentCardsData: null,
    allUserData: null,
    pages: null,
    loading: false,
    error: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.LOAD_DATA:
            return {
                ...state,
                loading: true,
            };
        case actionType.LOAD_DATA_SUCCEEDED:
            return {
                ...state,
                currentCardsData: action.payload.users,
                loading: false,
                pages: action.payload.pages,
            };
        case actionType.LOAD_DATA_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case actionType.FIND_USER:
            return {
                ...state,
                loading: true,
            };
        case actionType.CLEAR_ERROR:
            return {
                ...state,
                error: null,
            };
        case actionType.LOAD_ALL_ABOUT_USER_SUCCESSED:
            return {
                ...state,
                allUserData: action.payload
            };
        default:
            return state;
    }
};

export { reducer };
