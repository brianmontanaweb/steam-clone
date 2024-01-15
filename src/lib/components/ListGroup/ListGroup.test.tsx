import React from "react";
import { render, screen } from "@testing-library/react";
import ListGroup from "./ListGroup";

describe("<ListGroup />", () => {
  test("it should mount", () => {
    render(<ListGroup items={["hello"]} onSelectItem={() => {}} />);

    const listGroup = screen.getByTestId("ListGroup");

    expect(listGroup).toBeInTheDocument();
  });
});
