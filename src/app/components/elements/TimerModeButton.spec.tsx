import { fireEvent, render, getByText } from "@testing-library/react";
import TimerModeButton from "./TimerModeButton";

it("should allow to switch timer mode if it's available for it", () => {
  const onClick = jest.fn();
  const button = render(
    <TimerModeButton
      name="Pomodoro"
      active={true}
      availableForSwitch={true}
      onClick={onClick}
    />
  );
  fireEvent.click(button.getByText("Pomodoro"));
  expect(onClick).toBeCalled();
});

it("shouldn't allow to switch timer mode if it's not available for it", () => {
  const onClick = jest.fn();
  const button = render(
    <TimerModeButton
      name="Pomodoro"
      active={true}
      availableForSwitch={false}
      onClick={onClick}
    />
  );
  fireEvent.click(button.getByText("Pomodoro"));
  expect(onClick).not.toBeCalled();
});
