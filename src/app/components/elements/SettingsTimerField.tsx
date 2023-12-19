import { useAppDispatch } from "../../../redux/hooks";
import {
  millisecondsToMinutes,
  minutesToMilliseconds,
} from "../../../utils/time";
import { TimerType } from "../../types";
import { setCurrentTimeForTimerType } from "../../../redux/features/timerSlice";

export default function SettingsTimerField({
  label,
  time,
  timerType,
}: SettingsTimerFieldProps) {
  const formattedTime = millisecondsToMinutes(time);
  const dispatch = useAppDispatch();

  const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
    const minutes = Number.parseInt(event.currentTarget.value);
    const time = minutesToMilliseconds(minutes);

    if (Number.isSafeInteger(time) && time > 0) {
      dispatch(setCurrentTimeForTimerType({ time, timerType }));
    }
  };

  return (
    <fieldset>
      <label htmlFor="pomodoro" className="text-gray">
        {label}
      </label>
      <input
        type="number"
        className="w-[12vw] h-[5vh] font-light pl-[0.7rem] rounded-[10px]"
        defaultValue={formattedTime}
        onInput={handleInput}
      />
    </fieldset>
  );
}

declare interface SettingsTimerFieldProps {
  label: string;

  /**
   * Time in milliseconds
   */
  time: number;
  timerType: TimerType;
}
