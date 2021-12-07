import { actionType } from "../../consts";

const initialState = {
    loading: false,
    error: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.CREATE_USER:
            return {
                ...state,
                lading: true,
                error: null,
            };
        case actionType.CREATE_USER_SUCCESSED:
            return {
                ...state,
                loading: false,
            };
        case actionType.CREATE_USER_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export { reducer };