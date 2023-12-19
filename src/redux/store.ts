import { configureStore } from "@reduxjs/toolkit";
import timerSlice from "./features/timerSlice";
import timerTypeSlice from "./features/timerTypeSlice";

export const store = configureStore({
  reducer: {
    timerSlice,
    timerTypeSlice,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
