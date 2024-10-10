import React from "react";
import { BackgroundBeamsWithCollision } from "./UIConfig";
import '../../assets/styles.css';
import { time } from "framer-motion/client";

export function BackgroundBeamsWithCollisionDemo({
  formatTime,
  timeremaining,
}) {
  const { years, months, days, hours, minutes, seconds, milliseconds } = formatTime(timeremaining);
  
  return (
    <BackgroundBeamsWithCollision className="h-screen flex items-center justify-center overflow-y-hidden">
      <h2 className="flex flex-col font-bold text-center text-black dark:text-white font-sans tracking-tight w-full text-5xl">
        How Much Time Left?
        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          {/* Top Gradient Layer */}
          <div className="absolute left-0 top-[1px] text-transparent bg-clip-text bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-2 sm:py-4">
            <div className="clock-container  flex flex-row items-center justify-around w-[60vw]">
              <div className="Boxes flex flex-col">
                <div className="time flex flex-col justify-end h-12 text-8xl font-monster">{years}</div>
                <span className="label flex flex-col justify-start h-12 text-center font-monster">
                  Years
                </span>
              </div>
              <div className="Boxes relative">
                <div className="time flex flex-col justify-end h-12 text-5xl font-monster">{months}</div>
                <span className="label flex flex-col justify-start h-12 text-center font-monster">
                  Months
                </span>
              </div>
              <div className="Boxes">
                <div className="time flex flex-col justify-end h-12 font-monster">{days}</div>
                <span className="label flex flex-col justify-start h-12 text-center font-monster">
                  Days
                </span>
              </div>
              <div className="Boxes">
                <div className="time flex flex-col justify-end h-12 font-monster">{hours}</div>
                <span className="label flex flex-col justify-start h-12 text-center font-monster">
                  Hours
                </span>
              </div>
              <div className="Boxes">
                <div className="time flex flex-col justify-end h-12 font-monster">{minutes}</div>
                <span className="label flex flex-col justify-start h-12 text-center font-monster">
                  Minutes
                </span>
              </div>
              <div className="Boxes">
                <div className="time flex flex-col justify-end h-12 font-monster">{seconds}</div>
                <span className="label flex flex-col justify-start h-12 text-center font-monster">
                  Seconds
                </span>
              </div>
              <div className="Boxes">
                <div className="time flex flex-col justify-end h-12 font-monster">{milliseconds}</div>
                <span className="label flex flex-col justify-start h-12 text-center font-monster">
                  MS
                </span>
              </div>
            </div>
          </div>

          {/* Main Visible Layer */}
          <div className="relative text-transparent bg-clip-text bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-2 sm:py-4">
            <div className="clock-container flex flex-row items-center justify-around w-[60vw]">
              <div className="Boxes flex flex-col">
                <div className="time flex flex-col justify-end h-12 text-8xl font-monster">
                  {years}
                </div>
                <span className="label flex flex-col justify-start h-12 text-center font-monster">
                  Years
                </span>
              </div>
              <div className="Boxes flex flex-col">
                <div className="time flex flex-col justify-end h-12 text-5xl font-monster">{months}</div>
                <span className="label flex flex-col justify-start h-12 text-center font-monster">
                  Months
                </span>
              </div>
              <div className="Boxes">
                <div className="time flex flex-col justify-end h-12 text-5xl font-monster">{days}</div>
                <span className="label flex flex-col justify-start h-12 text-center font-monster">
                  Days
                </span>
              </div>
              <div className="Boxes">
                <div className="time flex flex-col justify-end h-12 text-5xl font-monster">{hours}</div>
                <span className="label flex flex-col justify-start h-12 text-center font-monster">
                  Hours
                </span>
              </div>
              <div className="Boxes">
                <div className="time flex flex-col justify-end h-12 text-5xl font-monster">{minutes}</div>
                <span className="label flex flex-col justify-start h-12 text-center font-monster">
                  Minutes
                </span>
              </div>
              <div className="Boxes">
                <div className="time flex flex-col justify-end h-12 text-5xl font-monster">{seconds}</div>
                <span className="label flex flex-col justify-start h-12 text-center font-monster">
                  Seconds
                </span>
              </div>
              <div className="Boxes">
                <div className="time flex flex-col justify-end h-12 text-5xl font-monster">{milliseconds}</div>
                <span className="label flex flex-col justify-start h-12 text-center font-monster">
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
