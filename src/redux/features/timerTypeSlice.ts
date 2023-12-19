import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TimerType } from "../../app/types";

type TimerTypeState = {
  currentTimerType: TimerType;
};

const initialState: TimerTypeState = {
  currentTimerType: TimerType.FOCUS,
};

export const timerTypeSlice = createSlice({
  name: "timerType",
  initialState,
  reducers: {
    setCurrentTimerType: (state, action: PayloadAction<TimerType>) => {
      state.currentTimerType = action.payload;
    },
  },
});

export const { setCurrentTimerType } = timerTypeSlice.actions;
export default timerTypeSlice.reducer;
