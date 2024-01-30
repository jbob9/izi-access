import { useState } from 'react'
import MemberShipLoginForm from './member-login-form'
import MemberShipContract from './member-ship-contract'

const MemberShip = () => {
  const [section, setSection] = useState('personal-info')

  const handleChangeSection = (section: string) => setSection(section)

  return (
    <div>
      <ol className="flex items-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-gray-400 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4 rtl:space-x-reverse">
          <li className="flex items-center text-blue-600 dark:text-blue-500 cursor-pointer"
          onClick={() => handleChangeSection('personal-info')}
          >
            <span className="flex items-center justify-center w-5 h-5 me-2 text-xs border border-blue-600 rounded-full shrink-0 dark:border-blue-500">
                1
            </span>
            Personal <span className="hidden sm:inline-flex sm:ms-2">Info</span>
            <svg className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m7 9 4-4-4-4M1 9l4-4-4-4"/>
            </svg>
          </li>
          <li className="flex items-center cursor-pointer"
          onClick={() => handleChangeSection('condition-info')}
          >
            <span className="flex items-center justify-center w-5 h-5 me-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
                2
            </span>
            Condition <span className="hidden sm:inline-flex sm:ms-2">Info</span>
            <svg className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m7 9 4-4-4-4M1 9l4-4-4-4"/>
            </svg>
          </li>
          <li className="flex items-center cursor-pointer">
            <span className="flex items-center justify-center w-5 h-5 me-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
                3
            </span>
            Member
          </li>
      </ol>
      <div className="mx-auto max-w-2xl px-2 pt-8 pb-16 lg:px-8">
        {section === 'personal-info' && <MemberShipLoginForm handleChangeSection={handleChangeSection}/>}
        {section === 'condition-info' && <MemberShipContract/>}
      </div>
    </div>
  )
}

export default MemberShip