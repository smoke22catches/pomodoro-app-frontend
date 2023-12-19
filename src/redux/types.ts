import { TimerType } from "../app/types";

export type TimeAndTimerTypePayload = {
  /**
   * Time in milliseconds
   */
  time: number;
  timerType: TimerType;
};
