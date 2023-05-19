import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const MINUTES_25 = 25 * 60 * 1000; // 25 minutes in milliseconds
const MINUTES_5 = 5 * 60 * 1000; // 5 minutes in milliseconds
const MINUTES_15 = 15 * 60 * 1000; // 15 minutes in milliseconds

/**
 * Every time set in milliseconds
 */
type PomodoroTimerState = {
    pomodoroTime: number;
    shortBreakTime: number;
    longBreakTime: number;

}

const initialState: PomodoroTimerState = {
    pomodoroTime: MINUTES_25,
    shortBreakTime: MINUTES_5,
    longBreakTime: MINUTES_15,
}

export const timerSlice = createSlice({
    name: 'pomodoroTimer',
    initialState,
    reducers: {
        setPomodoroTime: (state, action: PayloadAction<number>) => {
            state.pomodoroTime = action.payload;
        },
        setShortBreakTime: (state, action: PayloadAction<number>) => {
            state.shortBreakTime = action.payload;
        },
        setLongBreakTime: (state, action: PayloadAction<number>) => {
            state.longBreakTime = action.payload;
        },
    }
});

export const { setPomodoroTime, setShortBreakTime, setLongBreakTime } = timerSlice.actions;
export default timerSlice.reducer;
