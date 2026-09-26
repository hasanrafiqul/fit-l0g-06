// import React from 'react';
// import Image from 'next/image';
// import logo from "@/assets/logo.png"

// const Navbar = () => {
//     return (
//         <nav className='bg-amber-300'>
//             <div className="navbar bg-sky-800 shadow-sm container mx-auto">
//   <div className="navbar-start">
//     <div className="dropdown">
//       <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//         <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
//       </div>
//       <ul
//         tabIndex={-1}
//         className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
//         <li><a>Item 1</a></li>
//         <li>
//           <a>Parent</a>
//           <ul className="p-2">
//             <li><a>Submenu 1</a></li>
//             <li><a>Submenu 2</a></li>
//           </ul>
//         </li>
//         <li><a>Item 3</a></li>
//       </ul>
//     </div >
//         <div className='flex items-center'>
//             <Image 
//             src={logo}
//             alt={"mypla"}
//             />
//     <a className="btn btn-ghost text-xl text-white">FITLOG</a>
//         </div>
    
//   </div>
//   <div className="navbar-center hidden lg:flex">
//     <ul className="menu menu-horizontal px-1 text-white">
//       <li><a>Workout</a></li>
  
//       <li><a>My Plan</a></li>
//     </ul>
//   </div>
//   <div className="navbar-end gap-1">
//     <a className="btn">Plan</a>
//      <a className="btn">Saved</a>
//   </div>
// </div>
// </nav>
//     );
        
        
// };

// export default Navbar;




// import React from "react";

// const Navbar = () => {
//   return (
//     <nav className="bg-[#0b0c0f] text-white">
      
//       <div className="container mx-auto flex h-16 items-center justify-between px-6">

//         {/* Left - Logo */}
//         <div className="flex items-center gap-3">
//           <div className="text-lime-400 text-2xl">
//             ⚡
//           </div>

//           <h1 className="text-xl font-bold">
//             FITLOG
//           </h1>
//         </div>


//         {/* Center - Menu */}
//         <div className="flex items-center gap-2">
          
//           <button className="rounded-full bg-lime-950 px-5 py-2 text-sm font-semibold text-lime-400">
//             Workouts
//           </button>

//           <button className="px-5 py-2 text-sm text-gray-400">
//             My Plan
//           </button>

//         </div>


//         {/* Right - Status */}
//         <div className="flex items-center gap-6">

//           <div className="flex items-center gap-2 text-sm">
//             <span className="text-gray-300">
//               Plan
//             </span>

//             <span className="flex h-5 w-5 items-center justify-center rounded-full bg-lime-400 text-xs font-bold text-black">
//               0
//             </span>
//           </div>


//           <div className="flex items-center gap-2 text-sm">
//             <span className="text-gray-400">
//               Saved
//             </span>

//             <span className="flex h-5 w-5 items-center justify-center rounded-full border border-gray-700 text-xs">
//               0
//             </span>
//           </div>

//         </div>

//       </div>

//     </nav>
//   );
// };

// export default Navbar;



// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { usePlan } from "@/components/shared/planprovider";
// import logo from "@/assets/logo.png"

// const Navbar = () => {
//   const { todayPlan, savedWorkouts } = usePlan();

//   return (
//     <nav className="sticky top-0 z-50 border-b border-[#20232a] bg-[#0b0c0f] text-white">
//       <div className="container mx-auto flex h-16 items-center justify-between px-6">

//         {/* Left - Logo */}
//         <Link
//           href="/"
//           className="flex items-center gap-3"
//         >
//           <div>
//             <Image

//               src= {logo}
//               alt= "fitlog"
//               width= {30}
//               height= {30}
            
            
//             />
//           </div>

//           <h1 className="text-xl font-bold">
//             FITLOG
//           </h1>
//         </Link>

//         {/* Center - Menu */}
//         <div className="flex items-center gap-2">

//           <Link
//             href="/Workout"
//             className="rounded-full bg-lime-950 px-5 py-2 text-sm font-semibold text-lime-400"
//           >
//             Workouts
//           </Link>

//           <Link
//             href="/my-plan"
//             className="rounded-full px-5 py-2 text-sm font-semibold text-gray-400 transition hover:text-white"
//           >
//             My Plan
//           </Link>

//         </div>

//         {/* Right - Status */}
//         <div className="flex items-center gap-6">

//           {/* Plan */}
//           <Link 
//             href="/my-plan"
//             className="flex items-center gap-2 text-sm"
//           >
//             <span className="text-gray-300">
//               Plan
//             </span>

//             <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-lime-400 px-1 text-xs font-bold text-black">
//               {todayPlan.length}
//             </span>
//           </Link>

//           {/* Saved */}
//           <Link 
//             href="/my-plan"
//             className="flex items-center gap-2 text-sm"
//           >
//             <span className="text-gray-400">
//               Saved
//             </span>

//             <span className="flex h-5 min-w-5 items-center justify-center rounded-full border border-gray-700 px-1 text-xs">
//               {savedWorkouts.length}
//             </span>
//           </Link>

//         </div>

//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { usePlan } from "@/components/shared/planprovider";
// import logo from "@/assets/logo.png";

// const Navbar = () => {
//   const { todayPlan, savedWorkouts } = usePlan();

//   return (
//     <nav className="sticky top-0 z-50 border-b border-[#20232a] bg-[#0b0c0f] text-white">
//       <div className="container mx-auto flex h-16 items-center justify-between gap-2 px-3 sm:px-4 md:px-6">

//         {/* Logo */}
//         <Link
//           href="/"
//           className="flex shrink-0 items-center gap-2"
//         >
//           <Image
//             src={logo}
//             alt="FitLog"
//             width={30}
//             height={30}
//             className="shrink-0"
//           />

//           <h1 className="text-lg font-bold sm:text-xl">
//             FITLOG
//           </h1>
//         </Link>

//         {/* Center - Menu */}
//         <div className="flex items-center gap-1 sm:gap-2">
//           <Link
//             href="/Workout"
//             className="rounded-full bg-lime-950 px-3 py-2 text-xs font-semibold text-lime-400 sm:px-5 sm:text-sm"
//           >
//             Workouts
//           </Link>

//           <Link
//             href="/my-plan"
//             className="rounded-full px-2 py-2 text-xs font-semibold text-gray-400 transition hover:text-white sm:px-4 sm:text-sm"
//           >
//             My Plan
//           </Link>
//         </div>

//         {/* Right - Status */}
//         <div className="flex shrink-0 items-center gap-2 sm:gap-4 md:gap-6">

//           {/* Plan */}
//           <Link
//             href="/my-plan"
//             className="flex items-center gap-1 text-xs sm:gap-2 sm:text-sm"
//           >
//             <span className="text-gray-300">
//               Plan
//             </span>

//             <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-lime-400 px-1 text-[10px] font-bold text-black sm:text-xs">
//               {todayPlan.length}
//             </span>
//           </Link>

//           {/* Saved */}
//           <Link
//             href="/my-plan"
//             className="flex items-center gap-1 text-xs sm:gap-2 sm:text-sm"
//           >
//             <span className="text-gray-400">
//               Saved
//             </span>

//             <span className="flex h-5 min-w-5 items-center justify-center rounded-full border border-gray-700 px-1 text-[10px] text-gray-300 sm:text-xs">
//               {savedWorkouts.length}
//             </span>
//           </Link>

//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

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