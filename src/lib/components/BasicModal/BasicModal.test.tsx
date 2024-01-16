import React from "react";
import { render, screen } from "@testing-library/react";
import BasicModal from "./BasicModal";

describe("<BasicModal />", () => {
  test("it should mount", () => {
    render(<BasicModal closeModalHandler={() => {}}>Hello</BasicModal>);

    const addGameModal = screen.getByTestId("BasicModal");

    expect(addGameModal).toBeInTheDocument();
  });
});
