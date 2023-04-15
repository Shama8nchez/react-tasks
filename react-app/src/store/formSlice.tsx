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
  },
});

export const { addCard } = formSlice.actions;

export default formSlice.reducer;
