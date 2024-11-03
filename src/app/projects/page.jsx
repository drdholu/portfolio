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
      {info.Projects.details.map((project, idx) => (
        <div key={idx} className='mb-5'>
          <div className='flex mb-2 items-center gap-5'>
            <p className='text-3xl'>
              <LinkPreview url={project.link} className="font-bold">
                {project.name}
              </LinkPreview>
            </p>
            {project.status === 'Ongoing' ? (
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
              ) : (
                // <p>{project.status}</p>
                null
              )}
          </div>
          <p className='mb-2'>{project.description}</p>
          <div className='flex flex-wrap'>
            {project.technologies.map((tech, id) => (
              <span className='m-1' key={id}>
                <ShimmerButton text={tech}></ShimmerButton>
              </span>
            ))} 
          </div>
        </div>
      ))}
    </PageContainer>
  )
}

export default Page
