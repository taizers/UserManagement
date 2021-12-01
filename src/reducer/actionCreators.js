import { actionType } from "../consts";

const changeActivePopup = (currentActivePupupData) => { return {
    type: actionType.CHANGE_ACTIVE_POPUP,
    payload: currentActivePupupData,
}};

const pushedData = (data, id, page) => { return {
    type: actionType.PUSHED_DATA,
    payload: {
        data: data,
        id: id,
        page: page,
    },
}};

const requestForData = (currentPage) => { return {
    type: actionType.LOAD_DATA,
    payload: currentPage,
}};

const loadDataSuccessed = (users, pages) => { return {
    type: actionType.LOAD_DATA_SUCCEEDED,
    payload: {
        users: users,
        pages: pages,
    },
}};

const loadDataFailed = (error) => { return {
    type: actionType.LOAD_DATA_FAILED,
    payload: error,
}};

export {changeActivePopup, pushedData, requestForData, loadDataSuccessed, loadDataFailed};
