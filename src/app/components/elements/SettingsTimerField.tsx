export default function SettingsTimerField({
  label,
  defaultTime,
}: SettingsTimerFieldProps) {
  return (
    <fieldset>
      <label htmlFor="pomodoro" className="text-gray">
        {label}
      </label>
      <input
        type="number"
        className="w-[12vw] h-[5vh] font-light pl-[0.7rem] rounded-[10px]"
        defaultValue={defaultTime}
      />
    </fieldset>
  );
}

declare interface SettingsTimerFieldProps {
  label: string;
  defaultTime: number;
}
