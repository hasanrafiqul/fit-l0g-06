"use client";

import Image from "next/image";
import Link from "next/link";
import { usePlan } from "@/components/shared/planprovider";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const { todayPlan, savedWorkouts } = usePlan();

  return (
    <nav className="sticky top-0 z-50 border-b border-[#20232a] bg-[#0b0c0f] text-white">
      <div className="container mx-auto flex h-16 items-center justify-between gap-2 px-3 sm:px-4 md:px-6">

        {/* Logo */}
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2"
        >
          <Image
            src={logo}
            alt="FitLog"
            width={30}
            height={30}
            className="shrink-0"
          />

          <h1 className="text-lg font-bold sm:text-xl">
            FITLOG
          </h1>
        </Link>

        {/* Menu */}
        <div className="flex shrink-0 items-center gap-1">
          <Link
            href="/Workout"
            className="rounded-full bg-lime-950 px-3 py-2 text-xs font-semibold text-lime-400 sm:px-5 sm:text-sm"
          >
            Workouts
          </Link>

          <Link
            href="/my-plan"
            className="rounded-full px-2 py-2 text-xs font-semibold text-gray-400 transition hover:text-white sm:px-4 sm:text-sm"
          >
            My Plan
          </Link>
        </div>

        {/* Status */}
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-4 md:gap-6">

          {/* Plan */}
          <Link
            href="/my-plan"
            className="flex items-center gap-1 text-xs sm:gap-2 sm:text-sm"
          >
            <span className=" text-gray-300">
              Plan
            </span>

            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-lime-400 px-1 text-[10px] font-bold text-black sm:text-xs">
              {todayPlan.length}
            </span>
          </Link>

          {/* Saved */}
          <Link
            href="/my-plan"
            className="flex items-center gap-1 text-xs sm:gap-2 sm:text-sm"
          >
            <span className=" text-gray-400">
              Saved
            </span>

            <span className="flex h-5 min-w-5 shrink-0 items-center justify-center rounded-full border border-gray-700 px-1 text-[10px] text-white sm:text-xs">
  {savedWorkouts.length}
</span>
          </Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;