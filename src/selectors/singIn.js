export const getUserRole = (state) => {
    return state.singIn.userRole;
};

export const getUserIsLoading = (state) => {
    return state.singIn.loading;
};

export const getUserError = (state) => {
    return state.singIn.error;
};