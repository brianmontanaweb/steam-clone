import React from "react";
import { render, screen } from "@testing-library/react";
import GameItem from "./GameItem";
import { createGameInfoFromFixture } from "@/lib/mocks/fixtures";

describe("<GameItem />", () => {
  test("it should mount", () => {
    const gameInfo = createGameInfoFromFixture();
    render(<GameItem {...gameInfo} />);

    const gameItem = screen.getByTestId("GameItem");

    expect(gameItem).toBeInTheDocument();
  });
});
