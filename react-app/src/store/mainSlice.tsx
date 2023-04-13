import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { BASE_PATH, SEARCH_PATH, SEARCH_PARAM } from '../data/constants'
import { TCard, TData } from 'types';
import { getQuery } from '../components/utils/queryString';
//export { getQuery } from "../components/utils/queryString";

export interface MainState {
  result: TCard[],
  cardLoader: boolean,
}

const initialState: MainState = {
  result: [],
  cardLoader: false,
}

export const fetchRM = createAsyncThunk(
  "main/fetchRM",
  async function () {
    try {
      const response = await fetch(`${BASE_PATH}${SEARCH_PATH}${SEARCH_PARAM}=${getQuery()}`);

      if (!response.ok) {
        throw new Error("smst wrong")
      }
      const data = await response.json();
      const result = await data.results;
      return result;
    } catch(error) {

    }
  }
);

export const fetchSubmit = createAsyncThunk(
  "main/fetchSubmit",
  async function (query: TData) {
    try {
      const response = await fetch(`${BASE_PATH}${SEARCH_PATH}${SEARCH_PARAM}=${query.search}`);

      if (!response.ok) {
        throw new Error("smst wrong")
      }
      const data = await response.json();
      const result = await data.results;
      return result;
    } catch(error) {

    }
  }
);

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
  },
  extraReducers: {
    [fetchRM.pending.toString()]: (state) => {
      state.cardLoader = true;
    },
    [fetchRM.fulfilled.toString()]: (state, action) => {
      state.result = action.payload;
      state.cardLoader = false;
    },
    [fetchRM.rejected.toString()]: () => {},


    [fetchSubmit.fulfilled.toString()]: (state, action) => {
      state.result = action.payload;
    },
  }
})

// Action creators are generated for each case reducer function
//export const { showModal } = mainSlice.actions

export default mainSlice.reducer