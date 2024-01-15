import React from "react";
import { render, screen } from "@testing-library/react";
import List from "./List";
import { createGameInfoFromFixture } from "@/lib/mocks/fixtures";

describe("<List />", () => {
  test("it should mount", () => {
    render(<List items={[createGameInfoFromFixture()]} />);

    const list = screen.getByTestId("List");

    expect(list).toBeInTheDocument();
  });
});
