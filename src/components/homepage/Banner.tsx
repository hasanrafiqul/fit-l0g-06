import Image from "next/image";
import Link from "next/link";
import bannerImage from "@/assets/banner.png"

const Banner = () => {
  return (
    <section className="bg-[#15171d]">
      <div className="container mx-auto px-4">
        <div className="grid min-h-[450px] grid-cols-1 items-center gap-8 md:grid-cols-2">

          {/* Left Content */}
          <div className="space-y-6">

            <h2 className="text-2xl font-black uppercase leading-[0.95] text-white md:text-5xl">
              Train With Intent.Log 
              <br />
              Every Set.
            </h2>

            <p className="max-w-xl text-base leading-7 text-gray-400">
              FitLog is a dark, no-nonsense gym companion: pick a lift,
              lock it into today's plan, and watch the week's work add up.
            </p>

            <Link
  href="#library"
  className="inline-flex items-center gap-2 rounded-md bg-lime-400 px-5 py-3 text-sm font-bold uppercase text-black transition hover:bg-lime-300"
>
  Browse Workouts
  <span>→</span>
</Link>
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end">
            <Image 
            src={bannerImage}
            alt="Gym workout"
            width={500}
            height={500}
            className="h-auto w-full max-w-[450px] object-contain"
            />
            </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;