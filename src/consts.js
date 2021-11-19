export const pathLinks = {
    home: '/home',
    popup: '../popup/:id',
    redaction: '/redaction/:id',
    error: '/error'
};

export const START_PAGE = 1;

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
};