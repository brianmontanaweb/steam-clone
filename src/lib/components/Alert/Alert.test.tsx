import React from "react";
import { render, screen } from "@testing-library/react";
import Alert from "./Alert";

describe("<Alert />", () => {
  test("it should mount", () => {
    render(<Alert>WOW!</Alert>);

    const alert = screen.getByTestId("Alert");

    expect(alert).toBeInTheDocument();
  });
});
