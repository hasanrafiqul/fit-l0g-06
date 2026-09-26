"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import { usePlan } from "@/components/shared/planprovider";

type Tab = "today" | "saved";

export default function MyPlanPage() {
  const [activeTab, setActiveTab] =
    useState<Tab>("today");

  const [completed, setCompleted] = useState<number[]>(
    []
  );

  const [sortBy, setSortBy] = useState("duration");

  const {
    todayPlan,
    savedWorkouts,
    removeFromTodayPlan,
    removeFromSaved,
  } = usePlan();

  /*
   * Which list should be displayed?
   */
  const currentWorkouts =
    activeTab === "today"
      ? todayPlan
      : savedWorkouts;

  /*
   * Sorting
   */
  const sortedWorkouts = useMemo(() => {
    const result = [...currentWorkouts];

    if (sortBy === "duration") {
      result.sort(
        (a, b) => a.duration - b.duration
      );
    }

    if (sortBy === "calories") {
      result.sort(
        (a, b) =>
          b.caloriesBurned - a.caloriesBurned
      );
    }

    if (sortBy === "rating") {
      result.sort(
        (a, b) => b.rating - a.rating
      );
    }

    return result;
  }, [currentWorkouts, sortBy]);

  /*
   * Today's statistics
   */
  const totalMinutes = todayPlan.reduce(
    (sum, workout) =>
      sum + workout.duration,
    0
  );

  const totalCalories = todayPlan.reduce(
    (sum, workout) =>
      sum + workout.caloriesBurned,
    0
  );

  /*
   * Complete / incomplete
   */
  function handleComplete(
    id: number,
    name: string
  ) {
    setCompleted((prev) => {
      if (prev.includes(id)) {
        return prev.filter(
          (item) => item !== id
        );
      }

      return [...prev, id];
    });

    const isCompleted =
      completed.includes(id);

    toast.success(
      isCompleted
        ? `${name} marked as incomplete`
        : `${name} completed!`
    );
  }

  /*
   * Remove workout
   */
  function handleRemove(
    id: number,
    name: string
  ) {
    if (activeTab === "today") {
      removeFromTodayPlan(id);

      // If removed, also clear completed state
      setCompleted((prev) =>
        prev.filter((item) => item !== id)
      );

      toast.info(
        `${name} removed from your plan`
      );
    } else {
      removeFromSaved(id);

      toast.info(
        `${name} removed from saved`
      );
    }
  }

  return (
    <main className="min-h-screen bg-[#0d0f12] text-white">
      <div className="container mx-auto px-4 py-8">

        {/* Header */}
        <header className="mb-6">
          <h1 className="font-heading text-4xl font-bold tracking-wide">
            MY PLAN
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Cap of five lift limits for today. Finish them,
            then load more.
          </p>
        </header>

        {/* Stats */}
        <section className="grid grid-cols-1 overflow-hidden rounded-xl border border-[#20242c] bg-[#13161c] md:grid-cols-3">

  {/* Exercises */}
  <div className="border-b border-[#292d35] px-8 py-8 md:border-b-0 md:border-r">
    <span className="block text-sm text-gray-500">
      Exercises
    </span>

    <strong className="mt-2 block text-4xl font-bold text-lime-400">
      {todayPlan.length}
    </strong>
  </div>

  {/* Minutes */}
  <div className="border-b border-[#292d35] px-8 py-8 md:border-b-0 md:border-r">
    <span className="block text-sm text-gray-500">
      Minutes
    </span>

    <strong className="mt-2 block text-4xl font-bold text-white">
      {totalMinutes}
    </strong>
  </div>

  {/* Calories */}
  <div className="px-8 py-8">
    <span className="block text-sm text-gray-500">
      Calories
    </span>

    <strong className="mt-2 block text-4xl font-bold text-white">
      {totalCalories}
    </strong>
  </div>

</section>

        {/* Controls */}
        <div className="mt-6 flex flex-col justify-between gap-4 md:flex-row md:items-center">

          {/* Tabs */}
          <div className="inline-flex w-fit rounded-lg border border-[#242832] bg-[#15181f] p-1">

            <button
              type="button"
              onClick={() =>
                setActiveTab("today")
              }
              className={`rounded-md px-5 py-2 text-sm font-semibold transition ${
                activeTab === "today"
                  ? "bg-[#252a33] text-white"
                  : "text-gray-500 hover:text-white"
              }`}
            >
              Today's Plan
            </button>

            <button
              type="button"
              onClick={() =>
                setActiveTab("saved")
              }
              className={`rounded-md px-5 py-2 text-sm font-semibold transition ${
                activeTab === "saved"
                  ? "bg-[#252a33] text-white"
                  : "text-gray-500 hover:text-white"
              }`}
            >
              Saved
            </button>

          </div>

          {/* Sort */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500">
              Sort By
            </span>

            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(e.target.value)
              }
              className="rounded-md border border-[#292d35] bg-[#15181f] px-3 py-2 text-xs text-gray-300 outline-none"
            >
              <option value="duration">
                Duration
              </option>

              <option value="calories">
                Calories
              </option>

              <option value="rating">
                Rating
              </option>
            </select>
          </div>

        </div>

        {/* Workout List */}
        
{/* Workout List */}
<section className="mt-5 space-y-3">
  {sortedWorkouts.length > 0 ? (
    sortedWorkouts.map((workout) => {
      const isCompleted = completed.includes(workout.id);

      return (
        <article
          key={workout.id}
          className={`flex flex-col gap-4 rounded-xl border border-[#20242c] bg-[#13161c] p-3 transition md:flex-row md:items-center md:justify-between ${
            isCompleted ? "opacity-60" : ""
          }`}
        >
          {/* Left */}
          <div className="flex min-w-0 items-center gap-4">
            <img
              src={workout.image}
              alt={workout.name}
              className="h-16 w-28 shrink-0 rounded-lg object-cover"
            />

            <div className="min-w-0">
              <h2
                className={`font-heading text-lg font-bold uppercase ${
                  isCompleted ? "line-through" : ""
                }`}
              >
                {workout.name}
              </h2>

              <p className="mt-1 text-xs text-gray-500">
                {workout.equipment}
              </p>

              <div className="mt-2 flex flex-wrap gap-3 text-[11px] text-gray-400">
                <span>◉ {workout.duration} min</span>
                <span>◉ {workout.caloriesBurned} kcal</span>
                <span>☆ {workout.rating}</span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex shrink-0 flex-wrap items-center gap-2">
            <Link
              href={`/Workout/${workout.id}`}
              className="rounded-full border border-[#333842] px-4 py-2 text-xs font-medium text-gray-300 transition hover:border-gray-500 hover:text-white"
            >
              View Details
            </Link>

            {activeTab === "today" && (
              <button
                type="button"
                onClick={() =>
                  handleComplete(workout.id, workout.name)
                }
                className={`rounded-full px-4 py-2 text-xs font-bold transition ${
                  isCompleted
                    ? "bg-gray-700 text-gray-300"
                    : "bg-lime-400 text-black hover:bg-lime-300"
                }`}
              >
                ✓ {isCompleted ? "Completed" : "Mark as Done"}
              </button>
            )}

            <button
              type="button"
              aria-label={`Remove ${workout.name}`}
              onClick={() =>
                handleRemove(workout.id, workout.name)
              }
              className="px-2 py-2 text-lg text-gray-500 transition hover:text-red-400"
            >
              ×
            </button>
          </div>
        </article>
      );
    })
  ) : (
    <div className="flex min-h-[225px] items-center justify-center rounded-xl border border-dashed border-[#292d35] bg-[#15171b]">
      <div className="text-center">
        <h3 className="font-heading text-xl font-bold uppercase text-white">
          NOTHING HERE YET
        </h3>

        <p className="mt-1 text-xs text-gray-500">
          Browse the library and add a lift to get today moving.
        </p>

        <Link
          href="/#library"
          className="mt-5 inline-block rounded-full bg-lime-400 px-5 py-2 text-xs font-bold text-black transition hover:bg-lime-300"
        >
          Go to workouts
        </Link>
      </div>
    </div>
  )}
</section>

      </div>
    </main>
  );
}