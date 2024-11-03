'use client'
import React from 'react'
import ShimmerButton from '@/components/ui/shimmer-button'
import info from '@/data/info'
import PageContainer from '@/components/PageContainer'

const Page = () => {
  return (
    <PageContainer title="Skills">
      <div className="grid gap-6">
        {info.Skills.details.map((skill, idx) => (
          <div 
            key={idx} 
            className='p-6 rounded-lg backdrop-blur-sm 
                     hover:bg-white/10 transition-all duration-300 
                     border border-gray-800/20 shadow-sm'
          >
            <h2 className='text-3xl font-semibold mb-4'>
              {skill.name}
            </h2>
            <div className='flex flex-wrap gap-2'>
              {skill.technologies.map((tech, techIdx) => (
                <span key={techIdx}>
                  <ShimmerButton text={tech}></ShimmerButton>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </PageContainer>
  )
}

export default Page
