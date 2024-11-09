import React from 'react'
import ShimmerButtonDemo from '../magicui/shimmer-button'
const ShimmerButton = ({text} : {text: String} ) => {
    return (
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