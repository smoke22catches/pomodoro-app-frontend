import {
  setLongBreakTime,
  setPomodoroTime,
  setShortBreakTime,
} from "../../../redux/features/timerSlice";
import { useAppSelector } from "../../../redux/hooks";
import { Styleable } from "../interfaces/Styleable";
import SettingsTimerField from "./SettingsTimerField";

export default function SettingsDialogTimerSection({
  className,
}: SettingsDialogTimerSectionProps) {
  const pomodoroTime = useAppSelector((state) => state.timerSlice.pomodoroTime);
  const shortBreakTime = useAppSelector(
    (state) => state.timerSlice.shortBreakTime
  );
  const longBreakTime = useAppSelector(
    (state) => state.timerSlice.longBreakTime
  );

  return (
    <div className={className}>
      <SettingsTimerField
        label="Pomodoro"
        time={pomodoroTime}
        reducer={setPomodoroTime}
      />
      <SettingsTimerField
        label="Short Break"
        time={shortBreakTime}
        reducer={setShortBreakTime}
      />
      <SettingsTimerField
        label="Long Break"
        time={longBreakTime}
        reducer={setLongBreakTime}
      />
    </div>
  );
}

interface SettingsDialogTimerSectionProps extends Styleable {}
