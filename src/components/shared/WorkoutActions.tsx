// "use client";

// import { usePlan } from "@/components/shared/planprovider";
// import { toast } from "react-toastify";

// type WorkoutActionsProps = {
//   workoutName: string;
// };

// export default function WorkoutActions({
//   workoutName,
// }: WorkoutActionsProps) {
//   const { addToPlan } = usePlan();

//   const handleAddToPlan = () => {
//     addToPlan();

//     toast.success(`${workoutName} added to your plan!`);
//   };

//   return (
//     <div className="mt-8 flex flex-wrap justify-end gap-3 border-t border-[#292d35] pt-6">
//       <button
//         onClick={handleAddToPlan}
//         className="rounded-md bg-lime-400 px-5 py-3 text-sm font-bold text-black transition hover:bg-lime-300"
//       >
//         Add to Plan
//       </button>
//     </div>
//   );
// }


"use client";

import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import {
  usePlan,
  type Workout,
} from "@/components/shared/planprovider";

type WorkoutActionsProps = {
  workout: Workout;
};

export default function WorkoutActions({
  workout,
}: WorkoutActionsProps) {
  const router = useRouter();

  const {
    addToTodayPlan,
    saveForLater,
    isInTodayPlan,
    isSaved,
  } = usePlan();

  const handleAddToPlan = () => {
    if (isInTodayPlan(workout.id)) {
      toast.info(
        `${workout.name} is already in today's plan.`
      );
      return;
    }

    const added = addToTodayPlan(workout);

    if (!added) {
      toast.warning(
        "Today's plan can contain a maximum of 5 workouts."
      );
      return;
    }

    toast.success(
      `${workout.name} added to today's plan!`
    );

    router.push("/my-plan");
  };

  const handleSaveForLater = () => {
    if (isSaved(workout.id)) {
      toast.info(
        `${workout.name} is already saved.`
      );
      return;
    }

    saveForLater(workout);

    toast.success(
      `${workout.name} saved for later!`
    );

    router.push("/my-plan");
  };

  return (
    <div className="mt-6 flex flex-wrap justify-start gap-3">

      {/* Add to Today's Plan */}
      <button
        type="button"
        onClick={handleAddToPlan}
        className="rounded-md bg-lime-400 px-5 py-3 text-sm font-bold text-black transition hover:bg-lime-300"
      >
        {isInTodayPlan(workout.id)
          ? "Already Added"
          : "Add to Today's Plan"}
      </button>

      {/* Save for Later */}
      <button
        type="button"
        onClick={handleSaveForLater}
        className="rounded-md border border-[#333842] px-5 py-3 text-sm font-medium text-gray-300 transition hover:border-gray-500 hover:text-white"
      >
        {isSaved(workout.id)
          ? "Saved"
          : "Save for Later"}
      </button>

    </div>
  );
}