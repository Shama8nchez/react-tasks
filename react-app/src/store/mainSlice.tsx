import { createSlice, createAsyncThunk, AnyAction } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { BASE_PATH, SEARCH_PATH, SEARCH_PARAM } from '../data/constants'
import { TCard, TData } from 'types';
import { getQuery } from '../components/utils/queryString';

export interface MainState {
  error: string,
  modal: boolean,
  result: TCard[],
  cardLoader: boolean,
  character: TCard,
}

const initialState: MainState = {
  error: "",
  modal: false,
  result: [],
  cardLoader: false,
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
}

export const fetchRM = createAsyncThunk(
  "main/fetchRM",
  async function () {
      const response = await fetch(`${BASE_PATH}${SEARCH_PATH}${SEARCH_PARAM}=${getQuery()}`);

      if (!response.ok) {
        throw new Error("Something wrong");
      }
      const data = await response.json();
      const result = await data.results;
      return result;
  }
);

export const fetchSubmit = createAsyncThunk(
  "main/fetchSubmit",
  async function (query: TData) {
      const response = await fetch(`${BASE_PATH}${SEARCH_PATH}${SEARCH_PARAM}=${query.search}`);

      const data = await response.json();
      const result = await data.results;
      return result;
  }
);

export const fetchCharacter = createAsyncThunk(
  "main/fetchCharacter",
  async function (e: React.MouseEvent<HTMLDivElement>) {
    if (e.currentTarget) {
      const target: string = e.currentTarget.id.slice(5);
      const response = await fetch(`${BASE_PATH}${SEARCH_PATH}/${target}`);
      const data = await response.json();
      return data;
    }
  }
)

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchRM.pending, (state) => {
          state.result = [];
          state.cardLoader = true;
      })
      .addCase(
        fetchRM.fulfilled, (state, action) => {
          state.result = action.payload;
          state.cardLoader = false;
      })
      .addCase(
        fetchRM.rejected, (state, action) => {
          state.result = [];
          state.cardLoader = false;          
        }
      )
      .addCase(
        fetchCharacter.pending, (state) => {
        state.modal = true;
      })
      .addCase(
        fetchCharacter.fulfilled, (state, action) => {
          state.modal = true;
          state.character = action.payload;
  
      })
      .addCase(
        fetchCharacter.rejected, (state, action) => {
        
        }
      )
      .addCase(
        fetchSubmit.pending, (state) => {
          state.result = [];
          state.cardLoader = true;
      })
      .addCase(
        fetchSubmit.fulfilled, (state, action) => {
          state.result = action.payload;
          state.cardLoader = false;
        }
      )
      .addCase(
        fetchSubmit.rejected, (state, action) => {
          state.result = [];
          state.cardLoader = false;          
        }
      )
  }
});

// Action creators are generated for each case reducer function
//export const { showModal } = mainSlice.actions

export default mainSlice.reducer