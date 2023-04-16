import mainReducer, {
  closeModal,
  fetchCharacter,
  fetchRM,
  fetchSubmit,
} from "./mainSlice";

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

    const result = mainReducer(
      {
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
      },
      action
    );

    expect(result.modal).toBe(false);
  });
});

describe("RM", () => {
  it("pending", () => {
    const state = mainReducer(IS, fetchRM.pending);
    expect(state.cardLoader).toBe(true);
  });

  it("fulfilled", () => {
    const state = mainReducer(IS, fetchRM.fulfilled);
    expect(state.cardLoader).toBe(false);
  });

  it("rejected", () => {
    const state = mainReducer(IS, fetchRM.rejected);
    expect(state.cardLoader).toBe(false);
  });

  it("pending", () => {
    const state = mainReducer(IS, fetchCharacter.pending);
    expect(state.modal).toBe(true);
    expect(state.modalLoader).toBe(true);
  });

  it("fulfilled", () => {
    const state = mainReducer(IS, fetchCharacter.fulfilled);
    expect(state.modal).toBe(true);
    expect(state.modalLoader).toBe(false);
  });

  it("rejected", () => {
    const state = mainReducer(IS, fetchCharacter.rejected);
    expect(state.modalLoader).toBe(false);
  });

  it("pending", () => {
    const state = mainReducer(IS, fetchSubmit.pending);
    expect(state.cardLoader).toBe(true);
  });

  it("fulfilled", () => {
    const state = mainReducer(IS, fetchSubmit.fulfilled);
    expect(state.cardLoader).toBe(false);
  });

  it("rejected", () => {
    const state = mainReducer(IS, fetchSubmit.rejected);
    expect(state.cardLoader).toBe(false);
  });
});
