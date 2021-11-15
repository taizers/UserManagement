const initialState = {
    currentActivePupup: 1,
    currentPage: 1
};


const ActionCreators = {// функция для логики
    'CHANGE_ACTIVE_POPUP': (id) =>{
        //какaя то логика
        return {
            type: 'CHANGE_ACTIVE_POPUP',
            payload: id
        }
    },    
    'CHANGE_ACTIVE_PAGE': (currentPage) =>{
        return {
            type: 'CHANGE_ACTIVE_PAGE',
            payload: currentPage
        }
    }

}
//тогда в 
 


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
    }
    return state;
};

export {reducer, ActionCreators}; 