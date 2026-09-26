// "use client";

// import {
//   createContext,
//   useContext,
//   useState,
// } from "react";

// type PlanContextType = {
//   planCount: number;
//   savedCount: number;
//   addToPlan: () => void;
//   removeFromPlan: () => void;
// };

// const PlanContext = createContext<PlanContextType | null>(null);

// export function PlanProvider({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const [planCount, setPlanCount] = useState(2);
//   const [savedCount, setSavedCount] = useState(2);

//   const addToPlan = () => {
//     setPlanCount((count) => count + 1);
//   };

//   const removeFromPlan = () => {
//     setPlanCount((count) => Math.max(0, count - 1));
//   };

//   return (
//     <PlanContext.Provider
//       value={{
//         planCount,
//         savedCount,
//         addToPlan,
//         removeFromPlan,
//       }}
//     >
//       {children}
//     </PlanContext.Provider>
//   );
// }

// export function usePlan() {
//   const context = useContext(PlanContext);

//   if (!context) {
//     throw new Error(
//       "usePlan must be used inside PlanProvider"
//     );
//   }

//   return context;
// }



"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

export type Workout = {
  id: number;
  name: string;
  image: string;
  muscleGroups?: string[];
  equipment: string;
  difficulty?: string;
  duration: number;
  caloriesBurned: number;
  sets?: number;
  reps?: string;
  rating: number;
  description?: string;
  instructions?: string[];
};

type PlanContextType = {
  todayPlan: Workout[];
  savedWorkouts: Workout[];

  addToTodayPlan: (workout: Workout) => boolean;
  removeFromTodayPlan: (id: number) => void;

  saveForLater: (workout: Workout) => boolean;
  removeFromSaved: (id: number) => void;

  isInTodayPlan: (id: number) => boolean;
  isSaved: (id: number) => boolean;
};

const PlanContext = createContext<PlanContextType | null>(null);

export function PlanProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [todayPlan, setTodayPlan] = useState<Workout[]>([]);
  const [savedWorkouts, setSavedWorkouts] = useState<Workout[]>([]);

  const [isLoaded, setIsLoaded] = useState(false);

  // Load data from localStorage
  useEffect(() => {
    try {
      const storedPlan = localStorage.getItem("fitlog-today-plan");
      const storedSaved = localStorage.getItem("fitlog-saved-workouts");

      if (storedPlan) {
        setTodayPlan(JSON.parse(storedPlan));
      }

      if (storedSaved) {
        setSavedWorkouts(JSON.parse(storedSaved));
      }
    } catch (error) {
      console.error("Failed to load FitLog data:", error);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Save today's plan
  useEffect(() => {
    if (!isLoaded) return;

    localStorage.setItem(
      "fitlog-today-plan",
      JSON.stringify(todayPlan)
    );
  }, [todayPlan, isLoaded]);

  // Save saved workouts
  useEffect(() => {
    if (!isLoaded) return;

    localStorage.setItem(
      "fitlog-saved-workouts",
      JSON.stringify(savedWorkouts)
    );
  }, [savedWorkouts, isLoaded]);

  // Add workout to today's plan
  const addToTodayPlan = (workout: Workout) => {
    if (todayPlan.some((item) => item.id === workout.id)) {
      return false;
    }

    // Maximum 5 workouts per day
    if (todayPlan.length >= 5) {
      return false;
    }

    setTodayPlan((current) => [...current, workout]);

    return true;
  };

  // Remove workout from today's plan
  const removeFromTodayPlan = (id: number) => {
    setTodayPlan((current) =>
      current.filter((workout) => workout.id !== id)
    );
  };

  // Save workout for later
  const saveForLater = (workout: Workout) => {
    if (savedWorkouts.some((item) => item.id === workout.id)) {
      return false;
    }

    setSavedWorkouts((current) => [...current, workout]);

    return true;
  };

  // Remove saved workout
  const removeFromSaved = (id: number) => {
    setSavedWorkouts((current) =>
      current.filter((workout) => workout.id !== id)
    );
  };

  const isInTodayPlan = (id: number) => {
    return todayPlan.some((workout) => workout.id === id);
  };

  const isSaved = (id: number) => {
    return savedWorkouts.some((workout) => workout.id === id);
  };

  return (
    <PlanContext.Provider
      value={{
        todayPlan,
        savedWorkouts,
        addToTodayPlan,
        removeFromTodayPlan,
        saveForLater,
        removeFromSaved,
        isInTodayPlan,
        isSaved,
      }}
    >
      {children}
    </PlanContext.Provider>
  );
}

export function usePlan() {
  const context = useContext(PlanContext);

  if (!context) {
    throw new Error(
      "usePlan must be used inside PlanProvider"
    );
  }

  return context;
}