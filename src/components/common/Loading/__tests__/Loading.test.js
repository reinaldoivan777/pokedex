import React from "react";
import renderer from "react-test-renderer";

import Loading from "../index";

describe("Loading", () => {
  it("render without error", () => {
    renderer.create(<Loading />);
  });

  it("snapshot renders", () => {
    const component = renderer.create(<Loading />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
