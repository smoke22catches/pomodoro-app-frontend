import { Clickable } from "../interfaces/Clickable";

export default function TimerModeButton(props: TimerButtonProps) {
  const { name, active, availableForSwitch, onClick } = props;

  // Tailwind classes
  const colorClasses = active ? "bg-chocolate" : "bg-red-900";
  const shapeClasses = "rounded-[10px]";
  const positionClasses = "pl-[0.6rem] pr-[0.6rem] pt-[0.1rem] pb-[0.1rem]";
  const shadowClasses = active ? "inner-shadow-lg" : "shadow-lg";
  const classes = `${colorClasses} ${shapeClasses} ${positionClasses} ${shadowClasses}`;

  const hadnleClick = (onClick: (() => void) | undefined) => {
    if (!availableForSwitch) return;
    if (!onClick) return;

    onClick();
  };

  return (
    <button className={classes} onClick={() => hadnleClick(onClick)}>
      {name}
    </button>
  );
}

declare interface TimerButtonProps extends Clickable {
  name: string;
  active: boolean;
  availableForSwitch: boolean;
}
