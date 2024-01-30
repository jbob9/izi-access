import MemberShip from '@/components/membership'
import { CheckmarkIcon, EnvelopeIcon } from '@sanity/icons'

const MemberShipPage = () => {

  const handleOpen = () => {
    window.open('https://www.zeffy.com/en-CA/embed/ticketing/cc3cccd9-ab4e-4eb9-ae05-d930d6a5bef7', 'membership', 'scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=600,height=300,left=100,top=100')
  }
  return (
    
    <div className="xl:container mx-3 md:m-auto pt-24 md:px-12 lg:px-20">
      <MemberShip/>
      {/* <div className="m-auto text-center lg:w-8/12 xl:w-7/12">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
          A Tailus Blocks subscription gives you access to our components and more.
        </h2>
      </div>
      <div className="m-auto mt-12 items-center justify-center -space-y-4 md:flex md:space-y-0 md:-space-x-4 xl:w-10/12"
      >
        <div className="group relative z-10 -mx-4 md:mx-0 md:w-6/12 lg:w-5/12">
          <div
            aria-hidden="true"
            className="absolute top-0 h-full w-full rounded-3xl border border-gray-100 dark:border-gray-700 dark:shadow-none bg-white dark:bg-gray-800 shadow-2xl shadow-gray-600/10 transition duration-500 group-hover:scale-105"
          ></div>
          <div className="relative space-y-6 p-8 sm:p-12">
            <h3 className="text-center text-3xl font-semibold text-gray-700 dark:text-white">MemberShip</h3>
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
              className="mt-6 flex whitespace-nowrap space-x-2 text-center text-lg text-gray-600 dark:text-gray-300"
            >
              <span>Email us at:</span>
              <a href="mailto:iziaccess7@gmail.com" className="space-x-2 flex  items-center text-blue-500">
                <span className="font-semibold">iziaccess7@gmail.com</span>
              </a>
              
            </p>
            <div className='flex items-center justify-center text-gray-600 '>Or</div>
            <button onClick={handleOpen} className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
              <span className="relative text-base font-semibold text-white dark:text-dark">Become a member</span>
            </button>
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
          </div>
        </div>
      </div> */}
    </div>
                                      
  )
}

export default MemberShipPage