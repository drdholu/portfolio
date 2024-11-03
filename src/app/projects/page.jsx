'use client'
import GoBack from '@/components/GoBack'
import PageContainer from '@/components/PageContainer'
import ShimmerButton from '@/components/ui/shimmer-button'
import info from '@/data/info'
import React from 'react'
import { LinkPreview } from "@/components/ui/link-preview";

const Page = () => {
  return (
    <PageContainer title='Projects'>
      <div className="grid gap-6">
        {info.Projects.details.map((project, idx) => (
          <div 
            key={idx} 
            className='p-6 rounded-lg backdrop-blur-sm 
                     hover:bg-white/10 transition-all duration-300 
                     border border-gray-800/20 shadow-sm'
          >
            <div className="space-y-2 mb-4">
              <div className='flex items-center gap-5'>
                <p className='text-2xl'>
                  <LinkPreview url={project.link} className="font-bold">
                    {project.name}
                  </LinkPreview>
                </p>
                {project.status === 'Ongoing' && (
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                )}
              </div>
              <p className='text-gray-300'>{project.description}</p>
            </div>
            <div className='flex flex-wrap gap-2'>
              {project.technologies.map((tech, id) => (
                <ShimmerButton key={id} text={tech} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </PageContainer>
  )
}

export default Page
