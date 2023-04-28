import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TForm, TProps } from "types";

export interface FormState {
  cards: TProps[];
  card: TForm;
  note: string;
}

const initialState: FormState = {
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

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    addCard(state, action: PayloadAction<TProps>) {
      state.cards.push(action.payload);
    },
    showNote(state) {
      state.note = "Card was added";
    },
    hideNote(state) {
      state.note = "";
    },
  },
});

export const { addCard, showNote, hideNote } = formSlice.actions;

export default formSlice.reducer;
