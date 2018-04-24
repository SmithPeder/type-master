import React from 'react';
import { shallow } from 'enzyme';
import Sentence from './Sentence';

describe('<Sentence />', () => {
  test('renders', () => {
    const wrapper = shallow(<Sentence />);
    expect(wrapper).toMatchSnapshot();
  });
});
