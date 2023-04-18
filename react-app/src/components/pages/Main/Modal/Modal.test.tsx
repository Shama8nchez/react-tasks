import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Modal from "./Modal";

const mockStore = configureStore([]);
const IS = {
  error: "",
  modal: true,
  result: [
    {
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
      image: "qaz",
      episode: ["1", "2"],
      url: "url",
      created: "2013-02-17",
    },
  ],
  cardLoader: false,
  modalLoader: false,
  character: {
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
    image: "qaz",
    episode: ["1", "2"],
    url: "url",
    created: "2013-02-17",
  },
};

const initialState = {
  main: IS,
};

const store = mockStore(initialState);

describe("cards", () => {
  it("Empty list", () => {
    render(
      <Provider store={store}>
        <Modal />
      </Provider>
    );

    const element = screen.getByText("Morti");
    expect(element).toBeInTheDocument();
  });

  it("Render list", () => {
    render(
      <Provider store={store}>
        <Modal />
      </Provider>
    );
    expect(screen.getByText("Wait...")).toBeInTheDocument();
  });
});
