import React from 'react';
import ErrorPage from './ErrorPage';
import { configure, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('ErrorPage', () => {
    const snapshoot = (error) => {
        const wrapper = render(<ErrorPage error={error} />);
        it(`ErrorPage with Error : ${error}`, () => {
            expect(wrapper).toMatchSnapshot();
        });
    }

    snapshoot("error");
});
