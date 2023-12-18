import { render, screen } from "@testing-library/react";
import TimerStartButton from "./TimerStartButton";

it("button should be in start state when timer is not running)", () => {
  const buttonText = "Start";
  render(<TimerStartButton isTimerRunning={false} />);
  expect(screen.queryByText(buttonText)).toBeInTheDocument();
});

it("button should be in stop state when timer is running", () => {
  const buttonText = "Stop";
  render(<TimerStartButton isTimerRunning={true} />);
  expect(screen.queryByText(buttonText)).toBeInTheDocument();
});
