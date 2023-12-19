import { render, screen } from "@testing-library/react";
import TimerStartButton from "./TimerStartButton";

it("should have text 'Start' when timer is not running", () => {
  const buttonText = "Start";
  render(<TimerStartButton isTimerRunning={false} />);
  expect(screen.queryByText(buttonText)).toBeInTheDocument();
});

it("should have text 'Stop' state when timer is running", () => {
  const buttonText = "Stop";
  render(<TimerStartButton isTimerRunning={true} />);
  expect(screen.queryByText(buttonText)).toBeInTheDocument();
});
