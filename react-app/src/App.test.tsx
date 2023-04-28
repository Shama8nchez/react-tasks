import { describe, it } from "vitest";
import { getByText, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
import { FormCard } from "./components/pages/Forms/FormCard";

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
