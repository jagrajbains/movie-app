import React from "react";
import {shallow} from "enzyme";
import renderer from "react-test-renderer";
import Navbar from "../components/navbar";

describe("Testing the Navbar component", () => {
    it("It should render the Navbar without any errors", () => {
        const component = renderer.create(<Navbar />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});