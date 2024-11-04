import React from 'react'
import ShimmerButtonDemo from '../magicui/shimmer-button'
const ShimmerButton = ({text} : {text: String} ) => {
    return (
      
        // <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
        //     <span className="absolute inset-0 overflow-hidden rounded-full">
        //         <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
        //     </span>
        //     <div className="relative flex space-x-2 items-center rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
        //         <span>{text}</span>
        //         {/* <svg
        //             width="16"
        //             height="16"
        //             viewBox="0 0 24 24"
        //             fill="none"
        //             xmlns="http://www.w3.org/2000/svg"
        //         >
        //             <path
        //                 stroke="currentColor"
        //                 strokeLinecap="round"
        //                 strokeLinejoin="round"
        //                 strokeWidth="1.5"
        //                 d="M10.75 8.75L14.25 12L10.75 15.25"
        //             ></path>
        //         </svg> */}
        //     </div>
        //     <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
        // </button>

        // <button className="shadow-[inset_0_0_0_2px_#616467] text-black dark:text-neutral-200 px-4 py-2 md:px-8 md:py-3 lg:px-12 lg:py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white transition duration-200">
        //     {text}
        // </button>

    <div className="relative whitespace-nowrap cursor-pointer px-4 py-2 rounded-full 
      border border-slate-700 hover:border-blue-500/50
      transition-all duration-300 ease-out
      hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]">
      <div className='transform transition-transform duration-200 ease-out hover:scale-[1.02]
        text-gray-200 font-medium'>
        {text}
      </div>
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 
        hover:opacity-100 transition-opacity duration-300"></div>
    </div>
    )
}

export default ShimmerButton