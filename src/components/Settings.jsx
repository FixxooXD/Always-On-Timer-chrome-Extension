import { useState } from "react";
import { BackgroundBeamsWithCollision } from "./ui/UIConfig";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import "../assets/styles.css";

export function Settings({
  saveTargetDate,
  setSettingsClicked,
  customLabelSave,
  customLabel,
  TargetDate,
}) {
  const [inputDate, setInputDate] = useState(TargetDate);
  const [label, setLabel] = useState(customLabel);

  const handleSubmit = (e) => {
    e.preventDefault();
    saveTargetDate(inputDate);
    setSettingsClicked(false);
    customLabelSave(label);
  };

  return (
    <>
      <BackgroundBeamsWithCollision className="h-screen flex items-center justify-center overflow-y-hidden text-white">
        <div className="">
          <h1 className="font-bold text-center text-black dark:text-white tracking-tight w-full text-2xl font-monster">
            Settings
          </h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-between w-[25rem] h-[20rem] shadow-lg shadow-gray-500/50"
          >
            <div className="flex flex-col">
              <label htmlFor="myDate" className="w-full text-sm font-monster ">
                <span>Make custom Label</span>
              </label>
              <input
                onChange={(e) => setLabel(e.target.value)}
                id="myDate"
                type="text"
                value={label}
                className="bg-gradient-to-r border from-purple-500 via-violet-500 to-pink-500 bg-clip-text text-transparent text-[1.2rem] text-start px-2 w-full h-[3rem] font-bold font-monster transition duration-300 ease-in-out focus:ring-2  focus:ring-purple-500"
              />
              <label
                htmlFor="myDate"
                className="w-full text-sm  font-monster mt-4"
              >
                Select your target date
              </label>
              <input
                onChange={(e) => setInputDate(e.target.value)}
                id="myDate"
                type="date"
                value={inputDate}
                className="bg-gradient-to-r border from-purple-500 via-violet-500 to-pink-500 bg-clip-text text-transparent text-[1.5rem] text-center w-full h-[3rem] font-bold font-monster transition duration-300 ease-in-out focus:ring-2 focus:ring-purple-500"
                placeholder="Select your target date"
              />
            </div>
            <button
              type="submit"
              className="mt-4 bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 text-white py-2 px-4 rounded hover:from-violet-500 hover:to-purple-500 focus:ring-2 focus:ring-purple-500"
            >
              Submit
            </button>
            <footer className="mt-8 text-center text-xs text-gray-500 border-t-[0.2px] border-gray-400">
              <p className="pt-2 font-monster">Made with ❤ by FixxooXD</p>
              <div className="flex justify-center gap-2 mt-2">
                <a
                href="https://github.com/FixxooXD" target="_blank"><FontAwesomeIcon
                  icon={faGithub}
                  className="text-white w-4 h-4"
                /></a>
                <a 
                href="https://www.linkedin.com/in/raj-palmal-a736ab233/" target="_blank"><FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-white w-4 h-4"
                /></a>
                <a
                href="https://x.com/Raj_FixxooXD"
                ><FontAwesomeIcon
                  icon={faTwitter}
                  className="text-white w-4 h-4"
                /></a>
              </div>
            </footer>
          </form>
        </div>
      </BackgroundBeamsWithCollision>
    </>
  );
}
