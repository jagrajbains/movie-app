import React from "react";
import {shallow} from "enzyme";
import renderer from "react-test-renderer";
import SideMenu from "../components/sideMenu";

describe("Testing the SideMenu component", () => {
    it("Should render the sideMenu component without any errors", () => {
        const component = renderer.create(<SideMenu />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("Should show the App name as Movie DB", () => {
        const mockProps = "Movie DB";
        const wrapper = shallow(<SideMenu appName={mockProps}/>);
        expect(wrapper.find("h1").text()).toEqual("Movie DB");
    });
});