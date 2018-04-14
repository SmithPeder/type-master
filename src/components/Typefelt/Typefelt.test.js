import React from 'react';
import { shallow } from 'enzyme';
import Typefelt from './Typefelt';

describe('<Typefelt />', () => {
  test('renders', () => {
    const wrapper = shallow(<Typefelt />);
    expect(wrapper).toMatchSnapshot();
  });
});
