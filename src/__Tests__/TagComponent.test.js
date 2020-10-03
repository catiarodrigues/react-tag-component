import React from "react";
import { shallow, mount } from "enzyme";

import TagComponent from "../components/TagComponent";

describe("<TagComponent /> tests", () => {
  it("renders without errors and match snapshot", () => {
    const wrapper = shallow(<TagComponent />);

    expect(wrapper).toMatchSnapshot();
  });

  
  it("renders no tags on start", () => {
    const wrapper = mount(<TagComponent />);
    
    expect(wrapper.find("span")).toHaveLength(0);
  });
  
  describe("should add and remove tags", () => {
    const wrapper = mount(<TagComponent />);

    it("add tag", () => {
      wrapper.find("input").instance().value = "Sample";
      expect(wrapper.find("input").instance().value).toEqual("Sample");
      
      wrapper.find("input").simulate('keydown', { keyCode: 13 });
      expect(wrapper.find("span")).toHaveLength(1);
  
      expect(wrapper.find("span").last().text()).toEqual("Sample");
    })
    
    it("remove tag", () => {
      wrapper.find("button").simulate('click')
      expect(wrapper.find("span")).toHaveLength(0)
    })  
  })

});