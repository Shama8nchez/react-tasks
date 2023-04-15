import { describe, it } from "vitest";
import { getByText, render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import App from "./App";
import { Card } from "./components/pages/Main/card";
import SearchBar from "./components/pages/Main/searchBar";
import { FormCard } from "./components/pages/Forms/FormCard";
import Form from "./components/pages/Forms/Form";
import { TData } from "types";
import Modal from "./components/pages/Main/Modal/Modal";

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

    expect(screen.getByText("Form")).toBeInTheDocument();
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

test("searchBar", () => {
  const func = (data: TData) => {
    console.log(data);
  };

  render(<SearchBar />);
  const btn = screen.getByRole("button");
  expect(btn).toBeInTheDocument();
});

test("form", () => {
  render(<Form />);
  const btn = screen.getByRole("button");

  expect(btn).toBeInTheDocument();
  expect(screen.getByRole("checkbox")).toBeInTheDocument();
});

const check = () => {
  const utils = render(<Form />);
  const input = screen.getByLabelText("Ready for relocation:");
  return {
    input,
    ...utils,
  };
};

test("checkboxInput", () => {
  const { input } = check();
  expect((input as HTMLInputElement).checked).toEqual(false);
  fireEvent.click(input);
  expect((input as HTMLInputElement).checked).toEqual(true);
});

const setup = () => {
  const utils = render(<Form />);
  const input = screen.getByLabelText("Ready for relocation:");
  return {
    input,
    ...utils,
  };
};

test("textInput", () => {
  const { input } = setup();
  fireEvent.change(input, { target: { value: "abc" } });
  expect((input as HTMLInputElement).value).toBe("abc");
});

const date = () => {
  const utils = render(<Form />);
  const input = screen.getByLabelText("Enter your birthday date:");
  return {
    input,
    ...utils,
  };
};

test("dateInput", () => {
  const { input } = date();
  fireEvent.change(input, { target: { value: "2023-03-08" } });
  expect((input as HTMLInputElement).value).toBe("2023-03-08");
});

const select = () => {
  const utils = render(<Form />);
  const input = screen.getByLabelText("Choose a course:");
  return {
    input,
    ...utils,
  };
};

test("selectInput", () => {
  const { input } = select();
  fireEvent.change(input, { target: { value: "React" } });
  expect((input as HTMLInputElement).value).toBe("React");
});

test("card", () => {
  const showModal = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget) {
      console.log(e.currentTarget);
    }
  };

  const obj1 = {
    id: 1,
    name: "Morti",
    status: "Died",
    species: "Human",
    type: "",
    gender: "Male",
    origin: {
      name: "Earth",
      url: "url",
    },
    location: {
      name: "Earth",
      url: "url",
    },
    image: "img",
    episode: ["1", "2"],
    url: "url",
    created: "2013-02-17",
  };
  render(<Card card={obj1} />);
  const element = screen.getByText("Morti");
  expect(element).toBeInTheDocument();
});

test("formcard", () => {
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
      birth={obj1.birthday}
      course={obj1.course}
      relocation={obj1.agree}
      language={obj1.language}
      img={obj1.img}
      key={obj1.key}
    />
  );
  const element = screen.getByText("Andrey");
  expect(element).toBeInTheDocument();
  expect(screen.getByText(/Andrey/i)).toBeInTheDocument();
  expect(screen.getByText("2023-03-17")).toBeInTheDocument();
});

test("formscard", async () => {
  const { getByAltText } = await render(
    <FormCard
      name={"Andrey"}
      birth={"2023-03-17"}
      course={"React"}
      relocation={"Ready for relocation"}
      language={"English"}
      img={"akcsnaiv"}
      key={"c1"}
    />
  );
  const image = getByAltText("card");

  expect(image).toHaveAttribute("src", "akcsnaiv");
});

test("Modal loads", () => {
  const func = () => {
    return true;
  };

  const obj1 = {
    id: 1,
    name: "Morti",
    status: "Died",
    species: "Human",
    type: "",
    gender: "Male",
    origin: {
      name: "Earth",
      url: "url",
    },
    location: {
      name: "Earth",
      url: "url",
    },
    image: "img",
    episode: ["1", "2"],
    url: "url",
    created: "2013-02-17",
  };

  render(<Modal />);
  const div = screen.getByText("Wait...");
  expect(div).toBeInTheDocument();
});

describe("CardForm", () => {
  it("should render all form fields", () => {
    render(
      <FormCard
        name={"Andrey"}
        birth={"2023-03-17"}
        course={"React"}
        relocation={"Ready for relocation"}
        language={"English"}
        img={"akcsnaiv"}
        key={"c1"}
      />
    );
    const el = document.querySelector("p") as HTMLParagraphElement;
    expect(getByText(el, "Andrey")).toBeInTheDocument();
  });
});
