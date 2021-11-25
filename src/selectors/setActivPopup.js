export const getCurrentPage = (state) => {
    return state.loadData.currentPage;
};

export const getUsersData = (state) => {
    return state.loadData.currentCardsData;
};

export const getPagesCount = (state) => {
    return state.loadData.pages;
};

export const getIsLoading = (state) => {
    return state.loadData.loading;
};

export const getError = (state) => {
    return state.loadData.error;
};
