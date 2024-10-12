import { useState } from "react";
import { Settings } from "./components/Settings";
import { useEffect } from "react";
import { BackgroundBeamsWithCollisionDemo } from "./components/ui/TimerClockIndex";
import { Bars3Icon } from '@heroicons/react/24/solid'
export default function App() {
  const [settingsClicked, setSettingsClicked] = useState(false);
  const [timeremaining, setTimeRemaining] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [TargetDate, setTargetDate] = useState("");
  const [customLabel, setCustomLabel] = useState("How Much Time Left?");

  // Function to save date to chrome storage
  const saveTargetDate = (targetDate) => {
    if (targetDate) {
      chrome.storage.sync.set({ targetDate }, function () {
        window.location.reload();
      });
    }
  };

  const customLabelSave = (label) => {
    if (label) {
      chrome.storage.sync.set({ label }, function () {
        window.location.reload();
      });
    }
  };


  const getTargetDate = () => {
    return new Promise((resolve, reject) => {
      chrome.storage.sync.get(["targetDate"], (result) => {
        if (chrome.runtime.lastError) {
          return reject(chrome.runtime.lastError);
        }
        resolve(result.targetDate);
      });
    });
  };

  const getLabel = () => {
    return new Promise((resolve, reject) => {
      //Saving the label in Chrome Storage
      chrome.storage.sync.get(["label"], (result) => {
        if (chrome.runtime.lastError) {
          return reject(chrome.runtime.lastError);
        }
        resolve(result.label);
      });
    });
  };

  // Load the saved date from chrome storage when the component mounts
  useEffect(() => {
    const loadTargetDate = async () => {
      try {
        //Saving the Target Date in Chrome Storage
        const savedTargetDate = await getTargetDate();
        console.log("Target date loaded:", savedTargetDate);
        setTargetDate(savedTargetDate || null); // Set to null if no date is found
      } catch (error) {
        console.error("Error loading target date:", error);
      }
    };

    const loadLabel = async () => {
      try {
        const savedLabel = await getLabel();
        console.log("Target date loaded:", savedLabel);
        setCustomLabel(savedLabel || null); // Set to null if no date is found
      } catch (error) {
        console.error("Error loading target date:", error);
      }
    };
  
    loadTargetDate(); // Call the async function
    loadLabel(); //Getting Label
  }, []);


  const targetDateInMs = new Date(TargetDate).getTime();

  useEffect(() => {
    if (targetDateInMs) {
      const timerInterval = setInterval(() => {
        const currentTime = Date.now();
        setIsRunning(true);
        const remainingInMs = targetDateInMs - currentTime;
        if (remainingInMs > 0) {
          setTimeRemaining(remainingInMs);
        } else {
          setTimeRemaining(0);
          isRunning(false);
          clearInterval(timerInterval);
          alert("Countdown reached the target date!");
        }
      }, 100);

      return () => clearInterval(timerInterval); // Clean up the interval on unmount
    }
  }, [TargetDate, isRunning]);

  const formatTime = (timeInMs) => {
    const milliseconds = Math.floor((timeInMs % 1000) / 10);
    const seconds = Math.floor((timeInMs / 1000) % 60);
    const minutes = Math.floor((timeInMs / (1000 * 60)) % 60);
    const hours = Math.floor((timeInMs / (1000 * 60 * 60)) % 24);
    const days = Math.floor((timeInMs / (1000 * 60 * 60 * 24)) % 30);
    const months = Math.floor((timeInMs / (1000 * 60 * 60 * 24 * 30)) % 12);
    const years = Math.floor(timeInMs / (1000 * 60 * 60 * 24 * 365));

    const formattedMilliseconds = milliseconds < 10 ? `0${milliseconds}` : milliseconds;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedHours = hours < 10 ? `0${hours}` : hours;
    const formattedDays = days < 10 ? `0${days}` : days;
    const formatedMonths = months < 10 ? `0${months}` : months;
    const formattedYears = years < 10 ? `0${years}` : years;

    return {
      milliseconds: formattedMilliseconds,
      seconds: formattedSeconds,
      minutes: formattedMinutes,
      hours: formattedHours,
      days: formattedDays,
      months: formatedMonths,
      years: formattedYears
    };
  };

  return (
    <div>
      <nav className='w-full bg-white px-2 py-1 shadow-2xl'>
      <button><Bars3Icon onClick={() => setSettingsClicked(!settingsClicked)} className="size-6" /></button>
      </nav>
      {settingsClicked ? (
         <Settings
          saveTargetDate={saveTargetDate}
          TargetDate={TargetDate}
          setSettingsClicked={setSettingsClicked}
          customLabelSave={customLabelSave}
          customLabel={customLabel}
        />
      ) : (
        // <TimerClock formatTime={formatTime} timeremaining={timeremaining} />
        <BackgroundBeamsWithCollisionDemo
        formatTime={formatTime}
        timeremaining={timeremaining}
        customLabel={customLabel}
      />
      )}
    </div>
  );
}
