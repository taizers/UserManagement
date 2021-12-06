import { reducer } from './loadData';
import { loadDataSuccessed } from '../actionCreators';

const initialState = {
    currentCardsData: null,
    pages: null,
    loading: true,
    error: null,
};

const resultState = {
    currentCardsData: 4,
    pages: 1,
    loading: false,
    error: null,
};

test('check loadData reducer', () => {
    expect(reducer(initialState, loadDataSuccessed(4, 1))).toStrictEqual(resultState);
  });

