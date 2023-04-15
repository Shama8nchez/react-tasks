import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "./mainSlice";
import { useSelector, useDispatch } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import formSlice from "./formSlice";

export const store = configureStore({
  reducer: {
    main: mainReducer,
    form: formSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
