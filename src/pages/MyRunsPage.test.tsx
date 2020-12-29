import React from "react";
import { render } from "@testing-library/react";
import { MyRunsPage } from "./MyRunsPage";

describe("MyRunsPage", () => {
  it("renders", () => {
    const { getByTestId } = render(<MyRunsPage />);
    const page = getByTestId("myRunsPage");
    expect(page).toBeInTheDocument();
  });
});
