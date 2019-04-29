import { shallow, configure } from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';

configure({ adapter: new Adapter() });

describe('TESTING REACT COMPONENTS - testing sample component', () => {
  const SampleReactComponent = (props) =>
    <div className="sample" >
      {props}
    </div>;

  const divRender = props => (shallow(<SampleReactComponent {...props} />));
  const divWrapper = divRender();

  it('should return div with class name "sample"', () => {
    expect(divWrapper.find('.sample').length).to.equal(1);
  });
});
