import Link from "next/link";

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

const API_URL = "https://api.api-store.workers.dev/api/fitlog";

const Library = async () => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch workout data");
  }

  const workouts: Workout[] = await response.json();

  return (
    <section className="bg-[#0d0f12] py-12">
      <div className="container mx-auto px-4">

        {/* Section Heading */}
        <div className="mb-6">
          <h2 className="text-2xl font-black uppercase text-white">
            The Library
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        {/* Workout Cards */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">

          {workouts.slice(0, 9).map((workout) => (

            <Link
              href={`/Workout/${workout.id}`}
              key={workout.id}
              className="relative z-10 block overflow-hidden rounded-lg border border-[#25282e] bg-[#15181d] transition duration-300 hover:border-lime-400"
            >

              {/* Image */}
              <div className="h-44 overflow-hidden">
                <img
                  src={workout.image}
                  alt={workout.name}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Card Content */}
              <div className="p-3">

                {/* Muscle Groups */}
                <div className="mb-2 flex flex-wrap gap-1">

                  {workout.muscleGroups.map((muscle) => (
                    <span
                      key={muscle}
                      className="rounded-full bg-lime-400 px-2 py-0.5 text-[9px] font-bold uppercase text-black"
                    >
                      {muscle}
                    </span>
                  ))}

                </div>

                {/* Workout Name */}
                <h3 className="text-sm font-bold uppercase text-white">
                  {workout.name}
                </h3>

                {/* Equipment */}
                <p className="mt-1 text-xs text-gray-500">
                  {workout.equipment}
                </p>

                {/* Workout Stats */}
                <div className="mt-4 flex items-center justify-between text-[10px] text-gray-500">

                  <span>
                    ◷ {workout.duration} min
                  </span>

                  <span>
                    🔥 {workout.caloriesBurned} kcal
                  </span>

                  <span>
                    ★ {workout.rating}
                  </span>

                </div>

              </div>

            </Link>

          ))}

        </div>
      </div>
    </section>
  );
};

export default Library;

