import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Projects = () => {
  return (
    <div className='pt-14 md:pt-6 pb-16'>
       <div
          className="text-white pt-20 bg-[#232426]"
          style={{ paddingBottom: 'clamp(4rem, 3.38337rem + 1.62272vw, 5.6rem)' }}
        >
          <div className="px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            <div className="py-6 md:py-20">
              <h1 className="font-normal text-white leading-tight text-3xl md:text-4xl">
                Email and SMS marketing for gyms, salons, spas, and more
              </h1>
              <div className="mt-6 font-normal text-white leading-tight md:text-xl">
                <p>
                  Sign up more members. Book more appointments. Enhance client engagement. All while saving precious time.
                </p>
              </div>
              <div className="mt-9 flex items-center flex-wrap gap-6">
                <Button
                  className="bg-white text-neutral-950"
                >
                  Get Started
                </Button>
                {/* <Button variant='default' className='!rounded-2xl'>
                  Sign up
                </Button> */}
              </div>
            </div>
            <div className="-mx-14 max-w-5xl self-center px-10 md:px-0">
              <div className="flex item-center justify-center">
                <img
                  width={420}
                  height={760}
                  className="h-full w-full object-cover"
                  src="https://www.klaviyo.com/wp-content/uploads/2023/06/wellness-hero2-103023-1366x1212.webp"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Projects