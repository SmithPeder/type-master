import React from 'react';
import { shallow } from 'enzyme';
import Word from './Word';

describe('<Word />', () => {
  test('renders', () => {
    const wrapper = shallow(<Word />);
    expect(wrapper).toMatchSnapshot();
  });
});
