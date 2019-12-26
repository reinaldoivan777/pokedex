import React from "react";
import renderer from "react-test-renderer";

import Badges from "../index";

describe("Badges", () => {
  it("render without error", () => {
    renderer.create(<Badges datas={["fire", "electric"]} variant={"info"} />);
  });

  it("empty data", () => {
    renderer.create(<Badges datas={[]} variant={"info"} />);
  });

  it("data null", () => {
    renderer.create(<Badges datas={null} variant={"info"} />);
  });

  it("snapshot renders", () => {
    const component = renderer.create(<Badges datas={["fire", "electric"]} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
