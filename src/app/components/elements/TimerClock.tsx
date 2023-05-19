import { useState, useReducer, useEffect } from "react";
import { millisecondsToPrintableTime } from "../../../utils/time";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { setPomodoroTime } from "../../../redux/features/timerSlice";

export default function TimerClock(props: TimerClockProps) {
  const dispatch = useAppDispatch();
  const time = useAppSelector((state) => state.timerSlice.pomodoroTime);
  const { action } = props;
  const formatedTime = millisecondsToPrintableTime(time);
  const [lastTimeCheckpoint, setLastTimeCheckpoint] = useState<number>(0);
  const [intervalId, setIntervalId] = useState<Interval>();
  const [status, setStatus] = useState<TimerClockStatus>("PAUSED");

  useEffect(() => {
    const onStart = () => {
      setStatus("RUNNING");
      setLastTimeCheckpoint(Date.now());

      const newIntervalId = setInterval(() => {
        const timePassed = Date.now() - lastTimeCheckpoint;
        setLastTimeCheckpoint(() => Date.now());
        // todo changed time
        dispatch(setPomodoroTime(time - timePassed));
        // setFormatedTime(() => millisecondsToPrintableTime(timeToEnd));
      }, 500);

      setIntervalId(newIntervalId);
      return () => clearInterval(newIntervalId);
    };

    const onPause = () => {
      const timePassed = Date.now() - lastTimeCheckpoint;
      // todo changed time
      dispatch(setPomodoroTime(time - timePassed));
      // setFormatedTime(() => millisecondsToPrintableTime(timeToEnd));
      setLastTimeCheckpoint(() => Date.now());
    };

    switch (action) {
      case "START": {
        return onStart();
      }
      case "PAUSE": {
        if (status !== "PAUSED") {
          onPause();
        }
      }
    }
  }, [action, lastTimeCheckpoint]);

  return <p className="text-center text-9xl">{formatedTime}</p>;
}

export type TimerClockAction = "START" | "PAUSE";
type TimerClockStatus = "RUNNING" | "PAUSED";

declare interface TimerClockProps {
  /**
   * Time in milliseconds
   */
  time: number;
  action: TimerClockAction;
}

type Interval = ReturnType<typeof setInterval>;
