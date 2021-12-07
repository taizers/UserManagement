import { actionType } from "../../consts";

const initialState = {
    userRole: null,
    loading: false,
    error: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.SING_IN_USER:
            return {
                ...state,
                lading: true,
            };
        case actionType.SING_UP_USER:
            return {
                ...state,
                lading: true,
            };
        case actionType.SING_IN_USER_SUCCESSED:
            return {
                ...state,
                userRole: action.payload,
                loading: false,
            };
        case actionType.SING_IN_USER_FAILED:
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