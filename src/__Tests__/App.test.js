import React from "react"
import { shallow } from "enzyme"
import App from "../App"

describe("<App /> tests", () => {
  const wrapper = shallow(<App />);
  
  it("renders without errors and match snapshot", () => {
    expect(wrapper).toMatchSnapshot()
  })

  it("renders one TagComponent", () => {
    expect(wrapper.find('TagComponent')).toHaveLength(1);
  })

  it("Renders 1 H1 and 1 H2", () => {
    expect(wrapper.find('h1')).toHaveLength(1)
    expect(wrapper.find('h2')).toHaveLength(1)
  })
})