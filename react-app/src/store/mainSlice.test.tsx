import mainReducer, { closeModal, MainState } from "./mainSlice";

const IS = {
  error: "",
  modal: false,
  result: [],
  cardLoader: false,
  modalLoader: false,
  character: {
    name: "",
    status: "",
    species: "",
    type: "",
    gender: "",
    image: "",
    episode: [],
    id: 0,
    created: "",
    url: "",
    origin: {
      name: "",
      url: "",
    },
    location: {
      name: "",
      url: "",
    },
  },
};

describe("mainSlice", () => {
  it("defaul state", () => {
    const result = mainReducer(undefined, { type: "" });

    expect(result).toEqual(IS);
  });

  it("closeModal", () => {
    const action = { type: closeModal.type, payload: false };

    const result = mainReducer({
      error: "",
      modal: true,
      result: [],
      cardLoader: false,
      modalLoader: false,
      character: {
        name: "",
        status: "",
        species: "",
        type: "",
        gender: "",
        image: "",
        episode: [],
        id: 0,
        created: "",
        url: "",
        origin: {
          name: "",
          url: "",
        },
        location: {
          name: "",
          url: "",
        },
      },
    }, action)

    expect(result.modal).toBe(false);
  });
})