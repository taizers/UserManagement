export const pathLinks = {
    home: '/home',
    redaction: '/redaction/:id',
    error: '/error',
};

export const START_PAGE = 1;
export const USERS_ON_PAGE = 6;
export const DATE_MASK = 'dd/mm/yyyy';

export const actionType = {
    CHANGE_ACTIVE_POPUP: 'CHANGE_ACTIVE_POPUP',
    CHANGE_ACTIVE_PAGE: 'CHANGE_ACTIVE_PAGE',
    LOAD_DATA: 'LOAD_DATA',
    LOAD_TOTAL_PAGES: 'LOAD_TOTAL_PAGES',
    LOAD_DATA_SUCCEEDED: 'LOAD_DATA_SUCCEEDED',
    LOAD_DATA_FAILED: 'LOAD_DATA_FAILED',
    SEND_DATA_FAILED: 'SEND_DATA_FAILED',
    FETCHED_DATA: 'FETCHED_DATA',
    PUSHED_DATA: 'PUSHED_DATA',
    CHANGE_POPUP_DATE: 'CHANGE_POPUP_DATE',
    FETCHED_POPUP_DATA: 'FETCHED_POPUP_DATA',
};
