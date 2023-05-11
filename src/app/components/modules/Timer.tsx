"use client";

import { useState } from "react";
import TimerButton from "../elements/TimerButton";

export default function Timer() {
  const [currentTimer, setCurrentTimer] = useState<TimerType>(TimerType.FOCUS);

  return (
    <div className="max-w-sm mx-auto bg-red pb-8vh mt-[10%]">
      <div className="flex flex-col place-content-evenly w-[25rem] h-[20rem]">
        <div className="flex place-content-evenly">
          <TimerButton
            name="Pomodoro"
            active={currentTimer === TimerType.FOCUS}
            onClick={() => setCurrentTimer(TimerType.FOCUS)}
          />
          <TimerButton
            name="Short Break"
            active={currentTimer === TimerType.SHORT_BREAK}
            onClick={() => setCurrentTimer(TimerType.SHORT_BREAK)}
          />
          <TimerButton
            name="Long Break"
            active={currentTimer === TimerType.LONG_BREAK}
            onClick={() => setCurrentTimer(TimerType.LONG_BREAK)}
          />
        </div>
        <p className="text-center text-9xl">25:00</p>
        <button
          className="border-solid border-2 border-white text-center ml-[20%] mr-[20%] text-[30px] rounded-[20px]
        hover:border-red hover:bg-white hover:text-red"
        >
          Start
        </button>
      </div>
    </div>
  );
}

enum TimerType {
  FOCUS,
  SHORT_BREAK,
  LONG_BREAK,
}
