import React from 'react'
import { FaStar } from 'react-icons/fa6'

type Props = {}

const Line = (props: Props) => {
  return (
    <div>
        <div className=" gap-5 bg-green1 my-1 py-3 ">
        <div className="flex justify-between items-center mx-5">
          <div className="flex justify-start items-center gap-2   px-1  ">
            <div className="flex items-center justify-center rounded-full w-6 h-6 bg-bgGreen">
              <FaStar className="text-3xl text-yellow" />
            </div>
            <p className="text-xl">Lorem Ipsum</p>
          </div>
          <div className="flex justify-start items-center gap-2  px-1   ">
            <div className="flex items-center justify-center rounded-full w-6 h-6 bg-bgGreen">
              <FaStar className="text-xl text-yellow" />
            </div>
            <p className="text-xl">Lorem Ipsum</p>
          </div>
          <div className="flex justify-start items-center gap-2   px-1 ">
            <div className="flex items-center justify-center rounded-full w-6 h-6 bg-bgGreen">
              <FaStar className="text-xl text-yellow" />
            </div>
            <p className="text-xl">Lorem Ipsum</p>
          </div>
          <div className="flex justify-start items-center gap-2   px-1  ">
            <div className="flex items-center justify-center rounded-full w-6 h-6 bg-bgGreen">
              <FaStar className="text-xl text-yellow" />
            </div>
            <p className="text-xl">Lorem Ipsum</p>
          </div>
          <div className="flex justify-start items-center gap-2   px-1 ">
            <div className="flex items-center justify-center rounded-full w-6 h-6 bg-bgGreen">
              <FaStar className="text-xl text-yellow" />
            </div>
            <p className="text-xl">Lorem Ipsum</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Line