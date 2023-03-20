import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import App from "./App";
import { Card } from "./components/pages/Main/card";
import SearchBar from "./components/pages/Main/searchBar";

describe("App", () => {
  it("Renders Main page", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByRole("heading", {
        level: 1,
      })
    ).toHaveTextContent("Main");
  });
});

describe("App", () => {
  it("Renders About page", () => {
    render(
      <MemoryRouter initialEntries={["/about"]}>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByRole("heading", {
        level: 1,
      })
    ).toHaveTextContent("Main");
  });
});

describe("App", () => {
  it("Renders not found if invalid path", () => {
    render(
      <MemoryRouter initialEntries={["/this-route-does-not-exist"]}>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByRole("heading", {
        level: 1,
      })
    ).toHaveTextContent("Main");
  });
});

test("searchBar"),
  () => {
    render(<SearchBar />);
    const btn = screen.getByRole("button");
    const input = screen.getByPlaceholderText("");
    localStorage.setItem("value", "sometext");
    const text = localStorage.getItem("value");
    if (text) {
      const value = screen.getByText(text);
      expect(value).toBeInTheDocument();
    }
    expect(btn).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  };

test("card"),
  () => {
    const obj1 = {
      title: "name",
      source: "way",
      produced: "by me",
      release: "1201",
      id: 1,
    };
    render(<Card card={obj1} />);
    const element = screen.getByText("name");
    expect(element).toBeInTheDocument();
  };
