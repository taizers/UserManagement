import React from 'react';
import { configure, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from './Button';

configure({ adapter: new Adapter() });

describe('ErrorPage', () => {
    const snapshoot = (parentClassName, textButton, type, onClick, isDisabled) => {
        const wrapper = render(<Button parentClassName={parentClassName} textButton={textButton} type={type} onClick={onClick} isDisabled={isDisabled} />);
        it(`Button`, () => {
            expect(wrapper).toMatchSnapshot();
        });
    }

    snapshoot("popup", "редактировать", "button", ()=>{}, true);
    snapshoot("popup");
    snapshoot("popup", "редактировать", "button");
    snapshoot("popup", "редактировать", "button", ()=>{});
});