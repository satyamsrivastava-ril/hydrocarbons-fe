import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import { render, container } from "@testing-library/react";
import Logo from "../icons/Logo/logo";
import Navbar from "./navbar";
import { NavbarComponent } from "./navbarComponent";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

jest.mock("./navbarComponent", () => () => (
  <div id="navbarComponent">Navbar Component</div>
));

describe("Navbar component", () => {
  test("renders", () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper.exists()).toBe(true);
  });
});

describe("Navbar", () => {
  test("navbar", () => {
    const { container } = render(<Navbar />);
    // console.log(container.outerHTML);
    const mockComponent = container.querySelector("div#navbarComponent");
    //assert
    expect(mockComponent).toBeInTheDocument();
  });
});
