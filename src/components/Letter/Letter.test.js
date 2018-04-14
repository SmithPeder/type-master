import React from 'react';
import { shallow } from 'enzyme';
import Letter from './Letter';

describe('<Letter />', () => {
  test('renders', () => {
    const wrapper = shallow(<Letter />);
    expect(wrapper).toMatchSnapshot();
  });
});
