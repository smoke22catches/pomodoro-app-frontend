import { useState, useEffect } from "react";
import { millisecondsToPrintableTime } from "../../../utils/time";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { setCurrentTimeForTimerType } from "../../../redux/features/timerSlice";
import { TimerType } from "../../types";

export default function TimerClock(props: TimerClockProps) {
  const dispatch = useAppDispatch();
  const { action } = props;
  const timerType = useAppSelector(
    (state) => state.timerTypeSlice.currentTimerType
  );
  const time = useAppSelector((state) => {
    switch (timerType) {
      case TimerType.FOCUS: {
        return state.timerSlice.currentPomodoroTime;
      }
      case TimerType.SHORT_BREAK: {
        return state.timerSlice.currentShortBreakTime;
      }
      case TimerType.LONG_BREAK: {
        return state.timerSlice.currentLongBreakTime;
      }
    }
  });
  const formatedTime = millisecondsToPrintableTime(time);
  const [lastTimeCheckpoint, setLastTimeCheckpoint] = useState<number>(0);
  const [, setIntervalId] = useState<Interval>();
  const [status, setStatus] = useState<TimerClockStatus>("PAUSED");

  useEffect(() => {
    const onStart = () => {
      setStatus("RUNNING");
      setLastTimeCheckpoint(Date.now());

      const newIntervalId = setInterval(() => {
        const timePassed = Date.now() - lastTimeCheckpoint;
        setLastTimeCheckpoint(() => Date.now());
        dispatch(
          setCurrentTimeForTimerType({
            time: time - timePassed,
            timerType,
          })
        );
      }, 500);

      setIntervalId(newIntervalId);
      return () => clearInterval(newIntervalId);
    };

    const onPause = () => {
      const timePassed = Date.now() - lastTimeCheckpoint;
      dispatch(
        setCurrentTimeForTimerType({
          time: time - timePassed,
          timerType,
        })
      );
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
