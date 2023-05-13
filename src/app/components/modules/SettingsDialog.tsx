"use client";

import * as Dialog from "@radix-ui/react-dialog";
import {
  AiFillSetting,
  AiFillClockCircle,
  AiFillCloseSquare,
} from "react-icons/ai";
import SettingsTimerField from "../elements/SettingsTimerField";

export default function SettingsDialog() {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="ml-auto">
        <div className="bg-pink rounded-[5px] shadow-lg px-[0.5rem] py-[0.3rem]">
          <span className="align-middle inline-block mr-[5px]">
            <AiFillSetting />
          </span>
          <p className="align-middle inline-block">Settings</p>
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black fixed inset-0 opacity-50" />
        <Dialog.Content
          className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white text-black
                                    flex flex-col gap-[2rem] p-[2rem]"
        >
          <div>
            <Dialog.Title className="align-middle inline-block">
              Settings
            </Dialog.Title>
            <Dialog.Close className="align-middle inline-block float-right text-lg">
              <AiFillCloseSquare />
            </Dialog.Close>
            <hr />
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-gray text-xl">
              <span className="align-middle inline-block mr-[0.4rem]">
                <AiFillClockCircle />
              </span>
              <h3 className="align-middle inline-block">Timer</h3>
            </div>
            <p>Time (minutes)</p>
            <div className="flex flex-row">
              <SettingsTimerField label="Pomodoro" defaultTime={25} />
              <SettingsTimerField label="Short Break" defaultTime={5} />
              <SettingsTimerField label="Long Break" defaultTime={15} />
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
