import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TimeAndTimerTypePayload } from "../types";
import { TimerType } from "../../app/types";

const MINUTES_25 = 25 * 60 * 1000; // 25 minutes in milliseconds
const MINUTES_5 = 5 * 60 * 1000; // 5 minutes in milliseconds
const MINUTES_15 = 15 * 60 * 1000; // 15 minutes in milliseconds

/**
 * Every time set in milliseconds
 */
type PomodoroTimerState = {
  defaultPomodoroTime: number;
  defaultShortBreakTime: number;
  defaultLongBreakTime: number;

  currentPomodoroTime: number;
  currentShortBreakTime: number;
  currentLongBreakTime: number;
};

const initialState: PomodoroTimerState = {
  defaultPomodoroTime: MINUTES_25,
  defaultShortBreakTime: MINUTES_5,
  defaultLongBreakTime: MINUTES_15,

  currentPomodoroTime: MINUTES_25,
  currentShortBreakTime: MINUTES_5,
  currentLongBreakTime: MINUTES_15,
};

export const timerSlice = createSlice({
  name: "pomodoroTimer",
  initialState,
  reducers: {
    setCurrentTimeForTimerType: (
      state,
      action: PayloadAction<TimeAndTimerTypePayload>
    ) => {
      const { time, timerType } = action.payload;

      if (timerType === TimerType.FOCUS) {
        state.currentPomodoroTime = time;
      }

      if (timerType === TimerType.SHORT_BREAK) {
        state.currentShortBreakTime = time;
      }

      if (timerType === TimerType.LONG_BREAK) {
        state.currentLongBreakTime = time;
      }
    },
    setDefaultTimeForTimerType: (
      state,
      action: PayloadAction<TimeAndTimerTypePayload>
    ) => {
      const { time, timerType } = action.payload;

      if (timerType === TimerType.FOCUS) {
        state.defaultPomodoroTime = time;
      }

      if (timerType === TimerType.SHORT_BREAK) {
        state.defaultShortBreakTime = time;
      }

      if (timerType === TimerType.LONG_BREAK) {
        state.defaultLongBreakTime = time;
      }
    },
    resetTimeToDefaultForOtherTimerTypes: (
      state,
      action: PayloadAction<TimerType>
    ) => {
      const timerType = action.payload;

      if (timerType === TimerType.FOCUS) {
        state.currentShortBreakTime = state.defaultShortBreakTime;
        state.currentLongBreakTime = state.defaultLongBreakTime;
      }

      if (timerType === TimerType.SHORT_BREAK) {
        state.currentPomodoroTime = state.defaultPomodoroTime;
        state.currentLongBreakTime = state.defaultLongBreakTime;
      }

      if (timerType === TimerType.LONG_BREAK) {
        state.currentPomodoroTime = state.defaultPomodoroTime;
        state.currentShortBreakTime = state.defaultShortBreakTime;
      }
    },
  },
});

export const {
  setCurrentTimeForTimerType,
  setDefaultTimeForTimerType,
  resetTimeToDefaultForOtherTimerTypes,
} = timerSlice.actions;
export default timerSlice.reducer;
