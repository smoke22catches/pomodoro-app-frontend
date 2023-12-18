"use client";

import { useState } from "react";
import TimerModeButton from "../elements/TimerModeButton";
import TimerClock from "../elements/TimerClock";
import TimerStartButton from "../elements/TimerStartButton";

const MINUTES_25 = 25 * 60 * 1000; // 25 minutes in milliseconds

export default function Timer() {
  const [currentTimer, setCurrentTimer] = useState<TimerType>(TimerType.FOCUS);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);

  return (
    <div className="max-w-sm mx-auto bg-red pb-8vh mt-[10%]">
      <div className="flex flex-col place-content-evenly w-[25rem] h-[20rem]">
        <div className="flex place-content-evenly">
          <TimerModeButton
            name="Pomodoro"
            active={currentTimer === TimerType.FOCUS}
            onClick={() => setCurrentTimer(TimerType.FOCUS)}
          />
          <TimerModeButton
            name="Short Break"
            active={currentTimer === TimerType.SHORT_BREAK}
            onClick={() => setCurrentTimer(TimerType.SHORT_BREAK)}
          />
          <TimerModeButton
            name="Long Break"
            active={currentTimer === TimerType.LONG_BREAK}
            onClick={() => setCurrentTimer(TimerType.LONG_BREAK)}
          />
        </div>
        <TimerClock
          time={MINUTES_25}
          action={isTimerRunning ? "START" : "PAUSE"}
        />
        <TimerStartButton
          isTimerRunning={isTimerRunning}
          onClick={() => setIsTimerRunning(!isTimerRunning)}
          className="border-solid border-2 border-white text-center ml-[20%] mr-[20%] text-[30px] rounded-[20px]
        hover:border-red hover:bg-white hover:text-red"
        />
      </div>
    </div>
  );
}

enum TimerType {
  FOCUS,
  SHORT_BREAK,
  LONG_BREAK,
}
