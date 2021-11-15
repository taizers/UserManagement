const initialState = {
    currentActivePupup: {},
    currentPage: 1,
    currentCarsData: new Array(12).fill({}),
};


const ActionCreators = {// функция для логики
    'CHANGE_ACTIVE_POPUP': (currentActivePupupData) =>{
        //какaя то логика
        return {
            type: 'CHANGE_ACTIVE_POPUP',
            payload: currentActivePupupData
        }
    },    
    'CHANGE_ACTIVE_PAGE': (currentPage) =>{

        return {
            type: 'CHANGE_ACTIVE_PAGE',
            payload: currentPage
        }
    },    
    'CHANGE_USER_DATA': (changedPopup) =>{

        return {
            type: 'CHANGE_ACTIVE_POPUP',
            payload: changedPopup
        }
    }

};

const reducer = (state = initialState, action) =>{
    switch (action.type) {
        case 'CHANGE_ACTIVE_POPUP':
            return Object.assign({}, state, {
                currentActivePupup: action.payload
            });
        case 'CHANGE_ACTIVE_PAGE':
            return Object.assign({}, state, {
                currentPage: action.payload
            });
        case 'CHANGE_CARDS_DATA':
            return Object.assign({}, state, {
                currentCarsData: action.payload
            });
        default:
            break;
    }
    return state;
};

export {reducer, ActionCreators}; 