import { setCurrentTimeForTimerType } from "../../../redux/features/timerSlice";
import { useAppSelector } from "../../../redux/hooks";
import { TimerType } from "../../types";
import { Styleable } from "../interfaces/Styleable";
import SettingsTimerField from "./SettingsTimerField";

export default function SettingsDialogTimerSection({
  className,
}: SettingsDialogTimerSectionProps) {
  const pomodoroTime = useAppSelector(
    (state) => state.timerSlice.currentPomodoroTime
  );
  const shortBreakTime = useAppSelector(
    (state) => state.timerSlice.currentShortBreakTime
  );
  const longBreakTime = useAppSelector(
    (state) => state.timerSlice.currentLongBreakTime
  );

  return (
    <div className={className}>
      <SettingsTimerField
        label="Pomodoro"
        time={pomodoroTime}
        timerType={TimerType.FOCUS}
      />
      <SettingsTimerField
        label="Short Break"
        time={shortBreakTime}
        timerType={TimerType.SHORT_BREAK}
      />
      <SettingsTimerField
        label="Long Break"
        time={longBreakTime}
        timerType={TimerType.LONG_BREAK}
      />
    </div>
  );
}

interface SettingsDialogTimerSectionProps extends Styleable {}
