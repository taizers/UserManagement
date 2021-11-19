import { actionType } from "../../consts";

const initialState = {
    currentActivePupup: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.CHANGE_ACTIVE_POPUP:
            return Object.assign({}, state, {
                currentActivePupup: action.payload,
            });
        default:
            return state;
    }
};

export { reducer };
