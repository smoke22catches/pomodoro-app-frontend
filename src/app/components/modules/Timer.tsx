"use client";

import { useState } from "react";
import TimerModeButton from "../elements/TimerModeButton";
import TimerClock from "../elements/TimerClock";
import TimerStartButton from "../elements/TimerStartButton";
import { TimerType } from "../../types";
import { setCurrentTimerType } from "../../../redux/features/timerTypeSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { resetTimeToDefaultForOtherTimerTypes } from "../../../redux/features/timerSlice";

const MINUTES_25 = 25 * 60 * 1000; // 25 minutes in milliseconds

export default function Timer() {
  const dispatch = useAppDispatch();
  const currentTimerType = useAppSelector(
    (state) => state.timerTypeSlice.currentTimerType
  );
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);

  const switchTimer = (timerType: TimerType) => {
    dispatch(setCurrentTimerType(timerType));
  };

  const onStartButtonClick = () => {
    dispatch(resetTimeToDefaultForOtherTimerTypes(currentTimerType));
    setIsTimerRunning(!isTimerRunning);
  };

  return (
    <div className="max-w-sm mx-auto bg-red pb-8vh mt-[10%]">
      <div className="flex flex-col place-content-evenly w-[25rem] h-[20rem]">
        <div className="flex place-content-evenly">
          <TimerModeButton
            name="Pomodoro"
            active={currentTimerType === TimerType.FOCUS}
            availableForSwitch={!isTimerRunning}
            onClick={() => switchTimer(TimerType.FOCUS)}
          />
          <TimerModeButton
            name="Short Break"
            active={currentTimerType === TimerType.SHORT_BREAK}
            availableForSwitch={!isTimerRunning}
            onClick={() => switchTimer(TimerType.SHORT_BREAK)}
          />
          <TimerModeButton
            name="Long Break"
            active={currentTimerType === TimerType.LONG_BREAK}
            availableForSwitch={!isTimerRunning}
            onClick={() => switchTimer(TimerType.LONG_BREAK)}
          />
        </div>
        <TimerClock
          time={MINUTES_25}
          action={isTimerRunning ? "START" : "PAUSE"}
        />
        <TimerStartButton
          isTimerRunning={isTimerRunning}
          onClick={onStartButtonClick}
          className="border-solid border-2 border-white text-center ml-[20%] mr-[20%] text-[30px] rounded-[20px]
        hover:border-red hover:bg-white hover:text-red"
        />
      </div>
    </div>
  );
}
