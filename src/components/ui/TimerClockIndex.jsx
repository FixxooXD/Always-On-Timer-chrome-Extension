import React from "react";
import { BackgroundBeamsWithCollision } from "./UIConfig";

export function BackgroundBeamsWithCollisionDemo({
  formatTime,
  timeremaining,
}) {
  return (
    <BackgroundBeamsWithCollision className="h-screen flex items-center justify-center overflow-y-hidden">
      <h2 className="flex flex-col font-bold text-center text-black dark:text-white font-sans tracking-tight w-full text-5xl">
        How Much Time Left?
        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          {/* Top Gradient Layer */}
          <div className="absolute left-0 top-[1px] text-transparent bg-clip-text bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-2 sm:py-4">
            <div className="clock-container  flex flex-row items-center justify-around w-[70vw]">
              <div className="Boxes flex flex-col">
                <div className="time flex flex-col justify-end h-12 text-5xl font-monster">00</div>
                <span className="label flex flex-col justify-start h-12 text-center font-monster">
                  Years
                </span>
              </div>
              <div className="Boxes relative">
                <div className="time flex flex-col justify-end h-12 text-5xl font-monster">00</div>
                <span className="label flex flex-col justify-start h-12 text-center font-monster">
                  Years
                </span>
              </div>
              <div className="Boxes">
                <div className="time flex flex-col justify-end h-12 font-monster">00</div>
                <span className="label flex flex-col justify-start h-12 text-center font-monster">
                  Years
                </span>
              </div>
              <div className="Boxes">
                <div className="time flex flex-col justify-end h-12 font-monster">00</div>
                <span className="label flex flex-col justify-start h-12 text-center font-monster">
                  Years
                </span>
              </div>
              <div className="Boxes">
                <div className="time flex flex-col justify-end h-12 font-monster">00</div>
                <span className="label flex flex-col justify-start h-12 text-center font-monster">
                  Years
                </span>
              </div>
              <div className="Boxes">
                <div className="time flex flex-col justify-end h-12 font-monster">00</div>
                <span className="label flex flex-col justify-start h-12 text-center font-monster">
                  Years
                </span>
              </div>
              <div className="Boxes">
                <div className="time flex flex-col justify-end h-12 font-monster">00</div>
                <span className="label flex flex-col justify-start h-12 text-center font-monster">
                  Years
                </span>
              </div>
            </div>
          </div>

          {/* Main Visible Layer */}
          <div className="relative text-transparent bg-clip-text bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-2 sm:py-4">
            <div className="clock-container flex flex-row items-center justify-around w-[70vw]">
              <div className="Boxes flex flex-col">
                <div className="time flex flex-col justify-end h-12 text-5xl font-monster">
                  00
                </div>
                <span className="label flex flex-col justify-start h-12 text-center font-monster">
                  Years
                </span>
              </div>
              <div className="Boxes flex flex-col">
                <div className="time flex flex-col justify-end h-12 text-5xl font-monster">00</div>
                <span className="label flex flex-col justify-start h-12 text-center font-monster">
                  Years
                </span>
              </div>
              <div className="Boxes">
                <div className="time flex flex-col justify-end h-12 text-5xl font-monster">00</div>
                <span className="label flex flex-col justify-start h-12 text-center font-monster">
                  Years
                </span>
              </div>
              <div className="Boxes">
                <div className="time flex flex-col justify-end h-12 text-5xl font-monster">00</div>
                <span className="label flex flex-col justify-start h-12 text-center font-monster">
                  Years
                </span>
              </div>
              <div className="Boxes">
                <div className="time flex flex-col justify-end h-12 text-5xl font-monster">00</div>
                <span className="label flex flex-col justify-start h-12 text-center font-monster">
                  Years
                </span>
              </div>
              <div className="Boxes">
                <div className="time flex flex-col justify-end h-12 text-5xl font-monster">00</div>
                <span className="label flex flex-col justify-start h-12 text-center font-monster">
                  Years
                </span>
              </div>
              <div className="Boxes">
                <div className="time flex flex-col justify-end h-12 text-5xl font-monster">00</div>
                <span className="label flex flex-col justify-start h-12 text-center font-monster">
                  Years
                </span>
              </div>
            </div>
          </div>
        </div>
      </h2>
    </BackgroundBeamsWithCollision>
  );
}
