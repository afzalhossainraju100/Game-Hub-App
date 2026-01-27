import React from "react";
import icondownloads from "../../assets/icondownloads.png";
import iconreview from "../../assets/iconreview.png";
import iconratings from "../../assets/iconratings.png";
import Chart from "../Chart/Chart.jsx";

const AppDetails = () => {
  return (
    <div className="w-[90%] mt-10 mx-auto">
      <div className="flex flex-col gap-6 sm:flex-row mb-10">
        <img src="../../assets/demoapp1.webp" alt="" />
        <div className="space-y-4 flex flex-col items-start justify-start">
          <h1 className="text-[#001931]  font-bold text-[32px] leading-[39px] tracking-normal text-left capitalize">
            SmPlan:ToDo List with Reminder
          </h1>
          <p className="font-bold text-xl leading-8 tracking-normal text-left">
            Developed by <span></span>
          </p>
          <hr className="w-full border-t border-t-[#001931]/20" />
          <div className="flex flex-col gap-20 sm:flex-row justify-self-start mt-10 mb-10">
            <div className="flex flex-col items-left space-y-2 justify-center">
              <img className="w-10 h-10" src={icondownloads} alt="" />
              <p className="text-base font-normal leading-6 tracking-normal text-left capitalize">
                Downloads
              </p>
              <h1 className="font-extrabold text-[40px] leading-[40px] tracking-normal text-left capitalize">
                8M
              </h1>
            </div>
            <div className="flex flex-col items-left space-y-2 justify-center">
              <img className="w-10 h-10" src={iconratings} alt="" />
              <p className="text-base font-normal leading-6 tracking-normal text-left capitalize">
                Rating
              </p>
              <h1 className="font-extrabold text-[40px] leading-[40px] tracking-normal text-left capitalize">
                4.5
              </h1>
            </div>
            <div className="flex flex-col items-left space-y-2 justify-center">
              <img className="w-10 h-10" src={iconreview} alt="" />
              <p className="text-base font-normal leading-6 tracking-normal text-left capitalize">
                Reviews
              </p>
              <h1 className="font-extrabold text-[40px] leading-[40px] tracking-normal text-left capitalize">
                4.2K
              </h1>
            </div>
          </div>
          <button className=" px-5 py-3 rounded bg-[rgba(0,211,144,1)] text-[#ffffff]">
            Install Now (291 MB)
          </button>
        </div>
      </div>
      <div>
        <Chart></Chart>
      </div>
      <div className="mb-10 mt-10">
        <h1>
          <b>Description</b>
        </h1>
        <p className="text-[rgba(98,115,130,1)] text-xl font-normal leading-8 tracking-normal text-left">
          This focus app takes the proven Pomodoro technique and makes it even
          more practical for modern lifestyles. Instead of just setting a timer,
          it builds a complete environment for deep work, minimizing
          distractions and maximizing concentration. Users can create custom
          work and break intervals, track how many sessions they complete each
          day, and review detailed statistics about their focus habits over
          time. The design is minimal and calming, reducing cognitive load so
          you can focus entirely on the task at hand. Notifications gently let
          you know when to pause and when to resume, helping you maintain a
          healthy rhythm between work and rest. A unique feature of this app is
          the integration of task lists with timers. You can assign each task to
          a specific Pomodoro session, making your schedule more structured. The
          built-in analytics show not only how much time you’ve worked but also
          which tasks consumed the most energy. This allows you to reflect on
          your efficiency and adjust your workflow accordingly. The app also
          includes optional background sounds such as white noise, nature
          sounds, or instrumental music to create a distraction-free atmosphere.
          For people who struggle with procrastination, the app provides
          motivational streaks and achievements. Completing multiple Pomodoro
          sessions unlocks milestones, giving a sense of accomplishment. This
          gamified approach makes focusing more engaging and less like a chore.
          Whether you’re studying for exams, coding, writing, or handling office
          work, the app adapts to your routine. By combining focus tracking,
          task management, and motivational tools, this Pomodoro app ensures
          that you not only work harder but also smarter. It is a personal
          trainer for your brain, keeping you disciplined, refreshed, and
          productive throughout the day.
        </p>
      </div>
    </div>
  );
};

export default AppDetails;
