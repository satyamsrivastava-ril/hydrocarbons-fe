import React from "react";
import { shallow, mount } from "enzyme";
import ImageComponent from "./components/image/imageComponent";
import { NavbarComponent } from "./components/navbar/navbarComponent";
import Logo from "./components/icons/Logo/logo";

describe("Snapshot", () => {
  it("matches the snapshot", () => {
    // console.log(tree);
  });
});

describe("Logo", () => {
  it("Logo Comp", () => {
    const wrapper = shallow(<Logo />);
    const FaConfluence = wrapper.find("FaConfluence");
    //console.log(":::::::::::::::", FaConfluence.length);
    expect(FaConfluence.length).toEqual(1);
  });
});

// describe("Image", () => {
//   it("Image Comp", () => {
//     const props = {
//       source: { chestpain },
//       alt: "chestPain",
//       height: "317px",
//       width: "368px",
//     };
//     const wrapper = mount(<ImageComponent {...props} />);
//     const tag = (
//       <img src={chestpain} alt="chestpain" height="317px" width="368px" />
//     );
//     // console.log(":::::::::::::::", FaConfluence.length);
//     expect(wrapper.find("img").length).toEqual(1);
//   });
// });

test("APP", () => {
  expect(true).toBeTruthy();
});

describe("Header Component", () => {
  it("It should render without errror", () => {
    const props = {
      t: jest.fn(),
    };
    const wrapper = shallow(<NavbarComponent {...props} />);
    expect(wrapper.find("Logo")).toHaveLength(1);
    // .find(<Logo fontSize="28px " />);
    // expect(comp.length).toBe(1);
    // expect(wrapper.find("span").text()).toEqual("Admin");
  });
});
