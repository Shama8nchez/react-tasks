import formReducer, {
  addCard,
  FormState,
  hideNote,
  showNote,
} from "./formSlice";

describe("Form reducer", () => {
  const state: FormState = {
    cards: [],
    card: {
      name: "",
      birth: "",
      course: "",
      relocation: false,
      language: "",
      img: null,
    },
    note: "",
  };

  it("defaul state", () => {
    const result = formReducer(undefined, { type: "" });

    expect(result).toEqual(state);
  });

  it("should handle initial state", () => {
    const initialState: FormState = state;
    const action = { type: "unknown" };
    const expectedState = initialState;

    expect(formReducer(initialState, action)).toEqual(expectedState);
  });

  it("addCard", () => {
    const action = { type: addCard.type, payload: "Shama" };

    const result = formReducer(
      {
        cards: [],
        card: {
          name: "",
          birth: "",
          course: "",
          relocation: false,
          language: "",
          img: null,
        },
        note: "",
      },
      action
    );

    expect(result.cards[0]).toBe("Shama");
  });

  it("showNote", () => {
    const action = { type: showNote.type };

    const result = formReducer(
      {
        cards: [],
        card: {
          name: "",
          birth: "",
          course: "",
          relocation: false,
          language: "",
          img: null,
        },
        note: "Card was added",
      },
      action
    );

    expect(result.note).toBe("Card was added");
  });

  it("hideNote", () => {
    const action = { type: hideNote.type };

    const result = formReducer(
      {
        cards: [],
        card: {
          name: "",
          birth: "",
          course: "",
          relocation: false,
          language: "",
          img: null,
        },
        note: "",
      },
      action
    );

    expect(result.note).toEqual("");
  });
});
