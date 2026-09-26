
// import WorkoutActions from "@/components/shared/WorkoutActions";
// import { notFound } from "next/navigation";
// interface Workout {
//   id: number;
//   name: string;
//   image: string;
//   muscleGroups: string[];
//   equipment: string;
//   difficulty: string;
//   duration: number;
//   caloriesBurned: number;
//   sets: number;
//   reps: string;
//   rating: number;
//   description: string;
//   instructions: string[];
// }

// interface WorkoutDetailsPageProps {
//   params: Promise<{
//     id: string;
//   }>;
// }

// const WorkoutDetailsPage = async ({
//   params,
// }: WorkoutDetailsPageProps) => {

//   const { id } = await params;

//   const response = await fetch(
//   "https://api.abcz.workers.dev/api/fitlog",
//   {
//     cache: "no-store",
//   }
// );

//   if (!response.ok) {
//     throw new Error("Failed to fetch workout details");
//   }

//   const workouts: Workout[] = await response.json();
//   const workout = workouts.find(
//   (item) => item.id === Number(id)
// );

// if (!workout) {
//   notFound();
// }

//   return (
//     <main className="min-h-screen bg-[#0d0f12] text-white">

//       {/* Main Content */}
//       <section className="container mx-auto px-4 py-8">

//         <div className="grid gap-8 lg:grid-cols-2">

//           {/* LEFT - IMAGE */}
//           <div className="overflow-hidden rounded-xl">
//             <img
//               src={workout.image}
//               alt={workout.name}
//               className="h-full min-h-[450px] w-full object-cover"
//             />
//           </div>


//           {/* RIGHT - DETAILS */}
//           <div>

//             {/* Title */}
//             <h1 className="text-3xl font-black uppercase leading-tight md:text-4xl">
//               {workout.name}
//             </h1>


//             {/* Description */}
//             <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-400">
//               {workout.description}
//             </p>


//             {/* Muscle Groups */}
//             <div className="mt-4 flex flex-wrap gap-2">
//               {workout.muscleGroups.map((muscle) => (
//                 <span
//                   key={muscle}
//                   className="rounded-full bg-lime-400 px-3 py-1 text-xs font-bold text-black"
//                 >
//                   {muscle}
//                 </span>
//               ))}
//             </div>


//             {/* Information Box */}
//             <div className="mt-5 overflow-hidden rounded-xl border border-[#292d35] bg-[#15181f]">

//               {/* Equipment */}
//               <div className="flex items-center justify-between border-b border-[#292d35] px-4 py-3">
//                 <span className="text-[10px] font-bold uppercase text-gray-400">
//                   Equipment
//                 </span>

//                 <span className="text-sm text-gray-200">
//                   {workout.equipment}
//                 </span>
//               </div>


//               {/* Difficulty */}
//               <div className="flex items-center justify-between border-b border-[#292d35] px-4 py-3">
//                 <span className="text-[10px] font-bold uppercase text-gray-400">
//                   Difficulty
//                 </span>

//                 <span className="text-sm text-gray-200">
//                   {workout.difficulty}
//                 </span>
//               </div>


//               {/* Sets */}
//               <div className="flex items-center justify-between border-b border-[#292d35] px-4 py-3">
//                 <span className="text-[10px] font-bold uppercase text-gray-400">
//                   Sets
//                 </span>

//                 <span className="text-sm text-gray-200">
//                   {workout.sets}
//                 </span>
//               </div>


//               {/* Reps */}
//               <div className="flex items-center justify-between border-b border-[#292d35] px-4 py-3">
//                 <span className="text-[10px] font-bold uppercase text-gray-400">
//                   Reps
//                 </span>

//                 <span className="text-sm text-gray-200">
//                   {workout.reps}
//                 </span>
//               </div>


//               {/* Duration */}
//               <div className="flex items-center justify-between border-b border-[#292d35] px-4 py-3">
//                 <span className="text-[10px] font-bold uppercase text-gray-400">
//                   Duration
//                 </span>

//                 <span className="text-sm text-gray-200">
//                   {workout.duration} min
//                 </span>
//               </div>


//               {/* Calories */}
//               <div className="flex items-center justify-between border-b border-[#292d35] px-4 py-3">
//                 <span className="text-[10px] font-bold uppercase text-gray-400">
//                   Calories
//                 </span>

//                 <span className="text-sm text-gray-200">
//                   {workout.caloriesBurned} kcal
//                 </span>
//               </div>


//               {/* Rating */}
//               <div className="flex items-center justify-between px-4 py-3">
//                 <span className="text-[10px] font-bold uppercase text-gray-400">
//                   Rating
//                 </span>

//                 <span className="text-sm text-gray-200">
//                   {workout.rating}
//                 </span>
//               </div>

//             </div>


//             {/* Instructions */}
//             <div className="mt-6">

//               <h2 className="text-sm font-black uppercase">
//                 Instructions
//               </h2>

//               <ol className="mt-3 space-y-3">
//                 {workout.instructions.map((instruction, index) => (
//                   <li
//                     key={index}
//                     className="flex gap-3 text-xs leading-5 text-gray-400"
//                   >
//                     <span className="text-gray-500">
//                       {index + 1}.
//                     </span>

//                     <span>
//                       {instruction}
//                     </span>
//                   </li>
//                 ))}
//               </ol>

//             </div>

//           </div>

//         </div>


//         {/* Bottom Buttons */}

        
//         <div className="mt-8 flex flex-wrap justify-end gap-3 border-t border-[#292d35] pt-6">

        
        

//         </div>

//          <WorkoutActions workout={workout} />

//       </section>

//     </main>
//   );
// };
// export default WorkoutDetailsPage;


import WorkoutActions from "@/components/shared/WorkoutActions";
import { notFound } from "next/navigation";

interface Workout {
  id: number;
  name: string;
  image: string;
  muscleGroups: string[];
  equipment: string;
  difficulty: string;
  duration: number;
  caloriesBurned: number;
  sets: number;
  reps: string;
  rating: number;
  description: string;
  instructions: string[];
}

interface WorkoutDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const WorkoutDetailsPage = async ({
  params,
}: WorkoutDetailsPageProps) => {
  const { id } = await params;

  const response = await fetch(
    "https://api.abcz.workers.dev/api/fitlog",
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch workout details");
  }

  const workouts: Workout[] = await response.json();

  const workout = workouts.find(
    (item) => item.id === Number(id)
  );

  if (!workout) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0d0f12] text-white">
      {/* Main Content */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-2">

          {/* LEFT - IMAGE */}
          <div className="overflow-hidden rounded-xl">
            <img
              src={workout.image}
              alt={workout.name}
              className="h-full min-h-[450px] w-full object-cover"
            />
          </div>

          {/* RIGHT - DETAILS */}
          <div>
            {/* Title */}
            <h1 className="text-3xl font-black uppercase leading-tight md:text-4xl">
              {workout.name}
            </h1>

            {/* Description */}
            <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-400">
              {workout.description}
            </p>

            {/* Muscle Groups */}
            <div className="mt-4 flex flex-wrap gap-2">
              {workout.muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="rounded-full bg-lime-400 px-3 py-1 text-xs font-bold text-black"
                >
                  {muscle}
                </span>
              ))}
            </div>

            {/* Information Box */}
            <div className="mt-5 overflow-hidden rounded-xl border border-[#292d35] bg-[#15181f]">

              {/* Equipment */}
              <div className="flex items-center justify-between border-b border-[#292d35] px-4 py-3">
                <span className="text-[10px] font-bold uppercase text-gray-400">
                  Equipment
                </span>

                <span className="text-sm text-gray-200">
                  {workout.equipment}
                </span>
              </div>

              {/* Difficulty */}
              <div className="flex items-center justify-between border-b border-[#292d35] px-4 py-3">
                <span className="text-[10px] font-bold uppercase text-gray-400">
                  Difficulty
                </span>

                <span className="text-sm text-gray-200">
                  {workout.difficulty}
                </span>
              </div>

              {/* Sets */}
              <div className="flex items-center justify-between border-b border-[#292d35] px-4 py-3">
                <span className="text-[10px] font-bold uppercase text-gray-400">
                  Sets
                </span>

                <span className="text-sm text-gray-200">
                  {workout.sets}
                </span>
              </div>

              {/* Reps */}
              <div className="flex items-center justify-between border-b border-[#292d35] px-4 py-3">
                <span className="text-[10px] font-bold uppercase text-gray-400">
                  Reps
                </span>

                <span className="text-sm text-gray-200">
                  {workout.reps}
                </span>
              </div>

              {/* Duration */}
              <div className="flex items-center justify-between border-b border-[#292d35] px-4 py-3">
                <span className="text-[10px] font-bold uppercase text-gray-400">
                  Duration
                </span>

                <span className="text-sm text-gray-200">
                  {workout.duration} min
                </span>
              </div>

              {/* Calories */}
              <div className="flex items-center justify-between border-b border-[#292d35] px-4 py-3">
                <span className="text-[10px] font-bold uppercase text-gray-400">
                  Calories
                </span>

                <span className="text-sm text-gray-200">
                  {workout.caloriesBurned} kcal
                </span>
              </div>

              {/* Rating */}
              <div className="flex items-center justify-between px-4 py-3">
                <span className="text-[10px] font-bold uppercase text-gray-400">
                  Rating
                </span>

                <span className="text-sm text-gray-200">
                  {workout.rating}
                </span>
              </div>
            </div>

            {/* Instructions */}
            <div className="mt-6">
              <h2 className="text-sm font-black uppercase">
                Instructions
              </h2>

              <ol className="mt-3 space-y-3">
                {workout.instructions.map(
                  (instruction, index) => (
                    <li
                      key={index}
                      className="flex gap-3 text-xs leading-5 text-gray-400"
                    >
                      <span className="text-gray-500">
                        {index + 1}.
                      </span>

                      <span>{instruction}</span>
                    </li>
                  )
                )}
              </ol>
            </div>

            {/* Action Buttons */}
            <WorkoutActions workout={workout} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default WorkoutDetailsPage;



