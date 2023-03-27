import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import App from "./App";
import { Card } from "./components/pages/Main/card";
import SearchBar from "./components/pages/Main/searchBar";
import { FormCard } from "./components/pages/Forms/FormCard";
import Form from "./components/pages/Forms/Form";
import Forms from "./components/pages/Forms/Forms";

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
  it("Renders Forms page", () => {
    render(
      <MemoryRouter initialEntries={["/forms"]}>
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

test("form"),
  () => {
    render(<Form />);
    const btn = screen.getByRole("button");
    const input = screen.getByPlaceholderText("");

    expect(btn).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  };

test("formpage"),
  () => {
    render(<Forms />);
    const btn = screen.getByRole("button");
    const input = screen.getByPlaceholderText("");

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

test("formcard"),
  () => {
    const obj1 = {
      name: "Andrey",
      birthday: "2023-03-17",
      course: "React",
      agree: "Ready for relocation",
      language: "English",
      img: "akcsnaiv",
      key: "c1",
    };
    render(
      <FormCard
        name={obj1.name}
        birthday={obj1.birthday}
        course={obj1.course}
        agree={obj1.agree}
        language={obj1.language}
        img={obj1.img}
        key={obj1.key}
      />
    );
    const element = screen.getByText("Andrey");
    expect(element).toBeInTheDocument();
  };
