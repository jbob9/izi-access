import { CheckmarkIcon, EnvelopeIcon } from '@sanity/icons'
import React from 'react'

const MemberShip = () => {
  return (
    <div className="xl:container m-auto px-6 py-20 md:px-12 lg:px-20">
      <div className="m-auto text-center lg:w-8/12 xl:w-7/12">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
          A Tailus Blocks subscription gives you access to our components and more.
        </h2>
      </div>
      <div
        className="m-auto mt-12 items-center justify-center -space-y-4 md:flex md:space-y-0 md:-space-x-4 xl:w-10/12"
      >
        <div className="group relative z-10 -mx-4 md:mx-0 md:w-6/12 lg:w-5/12">
          <div
            aria-hidden="true"
            className="absolute top-0 h-full w-full rounded-3xl border border-gray-100 dark:border-gray-700 dark:shadow-none bg-white dark:bg-gray-800 shadow-2xl shadow-gray-600/10 transition duration-500 group-hover:scale-105"
          ></div>
          <div className="relative space-y-6 p-8 sm:p-12">
            <h3 className="text-center text-3xl font-semibold text-gray-700 dark:text-white">Organisation</h3>
            <div>
              <div className="relative flex justify-around">
                <div className="flex items-end">
                  <span className="leading-0 text-8xl font-bold text-gray-800 dark:text-white">35</span>
                  <div className="pb-2">
                    <span className="block text-2xl font-bold text-gray-700 dark:text-white">%</span>
                    <span className="block text-xl font-bold text-main">Off</span>
                  </div>
                </div>
              </div>
            </div>
            <ul role="list" className="m-auto w-max space-y-4 py-6 text-gray-600 dark:text-gray-300">
              <li className="space-x-2 flex items-center">
                <span className="font-semibold text-blue-500"><CheckmarkIcon className='w-6 h-6'/></span>
                <span>First premium advantage</span>
              </li>
              <li className="space-x-2 flex items-center">
                <span className="font-semibold text-blue-500"><CheckmarkIcon className='w-6 h-6'/></span>
                <span>Second advantage weekly</span>
              </li>
              <li className="space-x-2 flex items-center">
                <span className="font-semibold text-blue-500"><CheckmarkIcon className='w-6 h-6'/></span>
                <span>Third advantage donate to project</span>
              </li>
            </ul>
            <p
              className="mt-6 flex items-center justify-center space-x-4 text-center text-lg text-gray-600 dark:text-gray-300"
            >
              <span>Call us at</span>
              <a href="mailto:iziaccess7@gmail.com" className="space-x-2 flex items-center text-blue-500">
                <EnvelopeIcon className='w-6 h-6'/>
                <span className="font-semibold">+1 000 000</span>
              </a>
              <span>or</span>
            </p>
            <a href="mailto:" className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
              <span className="relative text-base font-semibold text-white dark:text-dark">Become a member</span>
            </a>
          </div>
        </div>
    
        <div className="group relative md:w-6/12 lg:w-7/12">
          <div
            aria-hidden="true"
            className="absolute top-0 h-full w-full rounded-3xl border border-gray-100 dark:border-gray-700 dark:shadow-none bg-white dark:bg-gray-800 shadow-2xl shadow-gray-600/10 transition duration-500 group-hover:scale-105"
          ></div>
          <div className="relative p-6 pt-16 md:rounded-r-2xl md:p-8 md:pl-12 lg:p-16 lg:pl-20">
            <ul role="list" className="space-y-4 py-6 text-gray-600 dark:text-gray-300">
              <li className="space-x-2 flex items-center">
                <span className="font-semibold text-blue-500"><CheckmarkIcon className='w-6 h-6'/></span>
                <span>First premium advantage</span>
              </li>
              <li className="space-x-2 flex items-center">
                <span className="font-semibold text-blue-500"><CheckmarkIcon className='w-6 h-6'/></span>
                <span>Second advantage weekly</span>
              </li>
              <li className="space-x-2 flex items-center">
                <span className="font-semibold text-blue-500"><CheckmarkIcon className='w-6 h-6'/></span>
                <span>Third advantage donate to project</span>
              </li>
              <li className="space-x-2 flex items-center">
                <span className="font-semibold text-blue-500"><CheckmarkIcon className='w-6 h-6'/></span>
                <span>Fourth, access to all components weekly</span>
              </li>
            </ul>
            <p className="text-gray-700">
              Team can be any size, and you can add or switch members as needed. Companies using
              our platform include:
            </p>
            {/* <div className="mt-6 flex justify-between gap-6">
              <img
                className="w-16 lg:w-24"
                src="images/clients/airbnb.svg"
                loading="lazy"
                alt="airbnb"
              />
              <img
                className="w-8 lg:w-16"
                src="images/clients/bissell.svg"
                loading="lazy"
                alt="bissell"
              />
              <img className="w-6 lg:w-12" src="images/clients/ge.svg" loading="lazy" alt="ge" />
              <img
                className="w-20 lg:w-28"
                src="images/clients/microsoft.svg"
                loading="lazy"
                alt="microsoft"
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
                                      
  )
}

export default MemberShip