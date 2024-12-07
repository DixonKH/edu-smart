import React from 'react'
import { FaStar } from 'react-icons/fa6'

type Props = {}

const Line = (props: Props) => {
  return (
    <div>
    
        <div className=" gap-5 bg-green1 my-4 lg:py-3 md:py-2 sm:py-1 py-1 ">
        <div className="flex justify-between items-center lg:mx-5 md:mx-2 mx-1">
          <div className="flex justify-start items-center gap-2   px-1  ">
            <div className="flex items-center justify-center rounded-full w-6 h-6 bg-bgGreen">
              <FaStar className="text-3xl text-yellow" />
            </div>
            <p className="md:text-base  hidden sm:hidden md:flex lg:flex">Lorem Ipsum</p>
          </div>
          <div className="flex justify-start items-center gap-2  px-1   ">
            <div className="flex items-center justify-center rounded-full w-6 h-6 bg-bgGreen">
              <FaStar className="text-xl text-yellow" />
            </div>
            <p className="text-xl md:text-base hidden sm:hidden md:flex lg:flex">Lorem Ipsum</p>
          </div>
          <div className="flex justify-start items-center gap-2   px-1 ">
            <div className="flex items-center justify-center rounded-full w-6 h-6 bg-bgGreen">
              <FaStar className="text-xl text-yellow" />
            </div>
            <p className="text-xl md:text-base hidden sm:hidden md:flex lg:flex">Lorem Ipsum</p>
          </div>
          <div className="flex justify-start items-center gap-2   px-1  ">
            <div className="flex items-center justify-center rounded-full w-6 h-6 bg-bgGreen">
              <FaStar className="text-xl text-yellow" />
            </div>
            <p className="text-xl md:text-base hidden sm:hidden md:flex lg:flex">Lorem Ipsum</p>
          </div>
          <div className="flex justify-start items-center gap-2   px-1 ">
            <div className="flex items-center justify-center rounded-full w-6 h-6 bg-bgGreen">
              <FaStar className="text-xl text-yellow" />
            </div>
            <p className="text-xl md:text-base hidden sm:hidden md:flex lg:flex">Lorem Ipsum</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Line