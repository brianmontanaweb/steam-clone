import React from "react";
import { render, screen } from "@testing-library/react";
import ListGroup from "./ListGroup";
import { createGameInfoFromFixture } from "@/lib/mocks/fixtures";

describe("<ListGroup />", () => {
  test("it should mount", () => {
    render(<ListGroup items={[createGameInfoFromFixture()]} />);

    const listGroup = screen.getByTestId("ListGroup");

    expect(listGroup).toBeInTheDocument();
  });
});
