import { actionType } from "../../consts";

const initialState = {
    currentPage: null,
    currentCardsData: null,
    pages: null,
    loading: false,
    error: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.FETCHED_DATA:
            return ({
                ...state,
                currentPage: action.payload,
            });
        case actionType.LOAD_DATA:
            return ({
                ...state,
                currentCardsData: null,
                loading: true,
                error: false,
            });
        case actionType.LOAD_DATA_SUCCEEDED:
            return ({
                ...state,
                currentCardsData: action.payload,
                loading: false,
                error: false,
            });
        case actionType.LOAD_DATA_FAILED:
            return ({
                ...state,
                currentCardsData: null,
                loading: false,
                error: action.payload,
            });
        case actionType.LOAD_TOTAL_PAGES:
            return ({
                ...state,
                pages: action.payload,
            });
        default:
            return state;
    }
};

export { reducer };
