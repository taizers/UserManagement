import { actionType } from "../../consts";

const initialState = {
    currentPage: 1,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
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
