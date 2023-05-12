import { AiFillCheckCircle } from "react-icons/ai";

import { AiFillSetting } from "react-icons/ai";

export default function Header() {
  return (
    <header className="max-w-sm mx-auto flex flex-row justify-between items-center mt-[1rem]">
      <div className="flex flex-row text-lg">
        <span className="mt-[4px] mr-[2px]">
          <AiFillCheckCircle />
        </span>
        <h1>Pomodoro</h1>
      </div>
      <button className="bg-pink rounded-[5px] shadow-lg px-[0.8rem] py-[0.4rem] flex flex-row">
        <AiFillSetting className="mt-[3.5px] mr-[5px]" /> Settings
      </button>
    </header>
  );
}
