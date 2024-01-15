import React from "react";
import { render, screen } from "@testing-library/react";
import AddGameForm from "./AddGameForm";

describe("<AddGameForm />", () => {
  test("it should mount", () => {
    render(<AddGameForm cancelHandler={() => {}} />);

    const addGameForm = screen.getByTestId("AddGameForm");

    expect(addGameForm).toBeInTheDocument();
  });
});
