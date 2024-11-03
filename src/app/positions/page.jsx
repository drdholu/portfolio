'use client'
import React from 'react'
import GoBack from '@/components/GoBack'
import PageContainer from '@/components/PageContainer'
import info from '@/data/info'

const Page = () => {
  return (
    <PageContainer title='Positions'>
      <div className="grid gap-6">
        {info["Positions of Responsibility"].details.map((position, idx) => (
          <div 
            key={idx} 
            className='p-6 rounded-lg backdrop-blur-sm 
                     hover:bg-white/10 transition-all duration-300 
                     border border-gray-800/20 shadow-sm'
          >
            <div className="space-y-2 mb-4">
              <h2 className='text-2xl font-bold tracking-tight'>{position.position}</h2>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <p className='text-xl font-medium'>{position.organization}</p>
                <p className='text-sm text-gray-400 font-medium'>{position.duration}</p>
              </div>
            </div>
            <ul className='space-y-2 list-none'>
              {position.responsibilities.map((responsibility, id) => (
                <li key={id} className="pl-4 border-l-2 border-white/50">
                  {responsibility}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </PageContainer>    
  )
}

export default Page