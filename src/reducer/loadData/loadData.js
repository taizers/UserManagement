import { actionType } from "../../consts";

const initialState = {
    currentPage: 1,
    currentCardsData: null,
    pages: null,
    loading: false,
    error: false,
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
        case actionType.CHANGE_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload,
            };
        default:
            return state;
    }
};

export { reducer };
