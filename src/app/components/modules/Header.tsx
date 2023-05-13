import { AiFillCheckCircle } from "react-icons/ai";
import SettingsDialog from "./SettingsDialog";

export default function Header() {
  return (
    <header className="max-w-sm mx-auto mt-[1rem] flex flex-row">
      <div className="text-lg">
        <span className="align-middle inline-block">
          <AiFillCheckCircle />
        </span>
        <h1 className="align-middle inline-block">Pomodoro</h1>
      </div>
      <SettingsDialog />
    </header>
  );
}
