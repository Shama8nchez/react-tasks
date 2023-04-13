import { createSlice } from "@reduxjs/toolkit";
import { BASE_PATH, SEARCH_PATH } from "../data/constants";
import { TApiState } from "types";

const apiSlice = createSlice({
  name: "api",
  initialState: {
    isModal: false,
    loadingModal: false,
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
    }
  } as unknown as TApiState,
  reducers: {
    showModal(state, action) {
      state.loadingModal = true;
      state.isModal = true;
      const target: string = e.currentTarget.id.slice(5);
      fetch(`${BASE_PATH}${SEARCH_PATH}/${target}`)
        .then((rez) => rez.json())
        .then((rez) => {
          state.character = ({
            id: rez.id,
            image: rez.image,
            name: rez.name,
            species: rez.species,
            status: rez.status,
            gender: rez.gender,
            type: rez.type,
            origin: rez.origin,
            location: rez.location,
            episode: rez.episodae,
            created: rez.created,
            url: rez.url,
          });
          state.loadingModal = false;
        });
    }
  }
});

export const { showModal } = apiSlice.actions;

export default apiSlice.reducer;
