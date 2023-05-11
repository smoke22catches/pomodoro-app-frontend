import { useState, useReducer, useEffect } from "react";
import { millisecondsToPrintableTime } from "../../utils/time";

export default function TimerClock(props: TimerClockProps) {
  const time = 25 * 60 * 1000;
  const { action } = props;
  const [formatedTime, setFormatedTime] = useState<string>(
    millisecondsToPrintableTime(time)
  );
  const [timeToEnd, setTimeToEnd] = useState<number>(time);
  const [lastTimeCheckpoint, setLastTimeCheckpoint] = useState<number>(0);
  const [intervalId, setIntervalId] = useState<Interval>();
  const [status, setStatus] = useState<TimerClockStatus>("PAUSED");

  useEffect(() => {
    const onStart = () => {
      setStatus("RUNNING");
      setLastTimeCheckpoint(Date.now());

      const newIntervalId = setInterval(() => {
        const timePassed = Date.now() - lastTimeCheckpoint;
        setTimeToEnd(() => timeToEnd - timePassed);
        setLastTimeCheckpoint(() => Date.now());
        setFormatedTime(() => millisecondsToPrintableTime(timeToEnd));
      }, 500);

      setIntervalId(newIntervalId);
      return () => clearInterval(newIntervalId);
    };

    const onPause = () => {
      const timePassed = Date.now() - lastTimeCheckpoint;
      setTimeToEnd(() => timeToEnd - timePassed);
      setFormatedTime(() => millisecondsToPrintableTime(timeToEnd));
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
  }, [action, status, timeToEnd, lastTimeCheckpoint]);

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
