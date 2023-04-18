import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../../../App";
import { Provider } from "react-redux";
import { store } from "../../../store/store";

describe("App", () => {
  it("Renders Form page", () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/forms"]}>
          <App />
        </MemoryRouter>
      </Provider>
    );
    expect(
      screen.getByRole("heading", {
        level: 1,
      })
    ).toHaveTextContent("Main");

    expect(screen.getByText("Form")).toBeInTheDocument();
  });
});
