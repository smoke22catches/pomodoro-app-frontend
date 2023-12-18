import { Clickable } from "../interfaces/Clickable";
import { Styleable } from "../interfaces/Styleable";

export default function TimerStartButton({
  className,
  onClick,
  isTimerRunning,
}: TimerStartButtonProps) {
  return (
    <button className={className} onClick={onClick}>
      {isTimerRunning ? "Stop" : "Start"}
    </button>
  );
}

type ClickableAndStyleable = Clickable & Styleable;

interface TimerStartButtonProps extends ClickableAndStyleable {
  isTimerRunning: boolean;
}
