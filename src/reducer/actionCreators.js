import { actionType } from "../consts";

export const changeActivePopup = (currentActivePupupData) => ({
    type: actionType.CHANGE_ACTIVE_POPUP,
    payload: currentActivePupupData,
});

export const pushedData = (data, id, page) => ({
    type: actionType.PUSHED_DATA,
    payload: {
        data: data,
        id: id,
        page: page,
    },
});

export const requestForData = (currentPage) => ({
    type: actionType.LOAD_DATA,
    payload: currentPage,
});

export const changeCurrentPage = (currentPage) => ({
    type: actionType.CHANGE_CURRENT_PAGE,
    payload: currentPage,
});

export const loadDataSuccessed = (users, pages) => ({
    type: actionType.LOAD_DATA_SUCCEEDED,
    payload: {
        users: users,
        pages: pages,
    },
});

export const loadDataFailed = (error) => ({
    type: actionType.LOAD_DATA_FAILED,
    payload: error,
});

export const loadUser = (loginData, history) => ({
    type: actionType.SING_IN_USER,
    payload: {
        data: loginData,
        history: history,
    },
});

export const loadUserSuccessed = (userRole) => ({
    type: actionType.SING_IN_USER_SUCCESSED,
    payload: userRole,
});

export const loadUserFailed = (error) => ({
    type: actionType.SING_IN_USER_FAILED,
    payload: error,
});

export const signUpUser = (loginData, history) => ({
    type: actionType.SING_UP_USER,
    payload: {
        data: loginData,
        history: history,
    },
});

export const createUserSuccessed = (userRole) => ({
    type: actionType.CREATE_USER_SUCCESSED,
    payload: userRole,
});

export const createUserFailed = (error) => ({
    type: actionType.CREATE_USER_FAILED,
    payload: error,
});

export const createUser = (loginData) => ({
    type: actionType.CREATE_USER,
    payload: loginData,
});

export const deleteUser = (id) => ({
    type: actionType.DELETE_USER,
    payload: id,
});
