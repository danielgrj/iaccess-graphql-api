import React from 'react';
import { shallow } from 'enzyme';
import Signup from '..';

describe('<Signup />', () => {
  describe('render()', () => {
    it('should match snapshot', () => {
      const wrapper = shallow(<Signup />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
