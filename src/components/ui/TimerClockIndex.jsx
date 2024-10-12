import React from "react";
import { BackgroundBeamsWithCollision } from "./UiConfig";
import '../../assets/styles.css';

export function BackgroundBeamsWithCollisionDemo({
  formatTime,
  timeremaining,
  customLabel,
}) {
  const { years, months, days, hours, minutes, seconds, milliseconds } = formatTime(timeremaining);
  
  return (
    <BackgroundBeamsWithCollision className="h-screen flex items-center justify-center overflow-y-hidden">
      <h2 className="flex flex-col font-bold text-center text-black dark:text-white tracking-tight w-full text-5xl font-monster l">
       {customLabel}
        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          {/* Top Gradient Layer */}
          <div className="absolute left-0 top-[1px] text-transparent bg-clip-text bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-2 sm:py-4">
            <div className="clock-container  flex flex-row items-center justify-around w-[60vw]">
              <div className="Boxes flex flex-col">
                <div className="time flex flex-col justify-end h-12 text-8xl font-monster font-normal">{years}</div>
                <span className="label flex flex-col justify-start h-12 text-center font-monster font-light">
                  Years
                </span>
              </div>
              <div className="Boxes relative">
                <div className="time flex flex-col justify-end h-12 text-5xl font-monster font-normal">{months}</div>
                <span className="label flex flex-col justify-start h-12 text-center font-monster font-normal">
                  Months
                </span>
              </div>
              <div className="Boxes">
                <div className="time flex flex-col justify-end h-12 font-monster font-normal">{days}</div>
                <span className="label flex flex-col justify-start h-12 text-center font-monster font-normal">
                  Days
                </span>
              </div>
              <div className="Boxes">
                <div className="time flex flex-col justify-end h-12 font-monster font-normal">{hours}</div>
                <span className="label flex flex-col justify-start h-12 text-center font-monster font-light">
                  Hours
                </span>
              </div>
              <div className="Boxes">
                <div className="time flex flex-col justify-end h-12 font-monster font-normal">{minutes}</div>
                <span className="label flex flex-col justify-start h-12 text-center font-monster font-light">
                  Minutes
                </span>
              </div>
              <div className="Boxes">
                <div className="time flex flex-col justify-end h-12 font-monster font-normal">{seconds}</div>
                <span className="label flex flex-col justify-start h-12 text-center font-monster font-light">
                  Seconds
                </span>
              </div>
              <div className="Boxes">
                <div className="time flex flex-col justify-end h-12 font-monster font-normal">{milliseconds}</div>
                <span className="label flex flex-col justify-start h-12 text-center font-monster font-light">
                  MS
                </span>
              </div>
            </div>
          </div>

          {/* Main Visible Layer */}
          <div className="relative text-transparent bg-clip-text bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-2 sm:py-4">
            <div className="clock-container flex flex-row items-center justify-around w-[60vw]">
              <div className="Boxes flex flex-col">
                <div className="time flex flex-col justify-end h-12 text-8xl font-monster font-normal">
                  {years}
                </div>
                <span className="label flex flex-col justify-start h-12 text-center font-monster font-light">
                  Years
                </span>
              </div>
              <div className="Boxes flex flex-col">
                <div className="time flex flex-col justify-end h-12 text-5xl font-monster font-normal">{months}</div>
                <span className="label flex flex-col justify-start h-12 text-center font-monster font-light">
                  Months
                </span>
              </div>
              <div className="Boxes">
                <div className="time flex flex-col justify-end h-12 text-5xl font-monster font-normal">{days}</div>
                <span className="label flex flex-col justify-start h-12 text-center font-monster font-light">
                  Days
                </span>
              </div>
              <div className="Boxes">
                <div className="time flex flex-col justify-end h-12 text-5xl font-monster font-normal">{hours}</div>
                <span className="label flex flex-col justify-start h-12 text-center font-monster font-light">
                  Hours
                </span>
              </div>
              <div className="Boxes">
                <div className="time flex flex-col justify-end h-12 text-5xl font-monster font-normal">{minutes}</div>
                <span className="label flex flex-col justify-start h-12 text-center font-monster font-light">
                  Minutes
                </span>
              </div>
              <div className="Boxes">
                <div className="time flex flex-col justify-end h-12 text-5xl font-monster font-normal">{seconds}</div>
                <span className="label flex flex-col justify-start h-12 text-center font-monster font-light">
                  Seconds
                </span>
              </div>
              <div className="Boxes">
                <div className="time flex flex-col justify-end h-12 text-5xl font-monster font-normal">{milliseconds}</div>
                <span className="label flex flex-col justify-start h-12 text-center font-monster font-light">
                  MS
                </span>
              </div>
            </div>
          </div>
        </div>
      </h2>
    </BackgroundBeamsWithCollision>
  );
}
