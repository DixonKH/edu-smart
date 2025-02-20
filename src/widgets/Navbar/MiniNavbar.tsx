import { FaInstagramSquare } from 'react-icons/fa'
import { FaFacebook, FaMessage, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa6'
import { IoIosCall } from 'react-icons/io'

export default function MiniNavbar() {
  return (
    <div className="lg:container md:px-10 w-[100%] sm:px-5 px-1">
          <div className=" md:flex flex lg:flex  justify-between  items-center ">
            <div className="flex justify-between items-center gap-3 p-1">
              <div className="flex items-center justify-start">
                <div className="flex items-center  justify-between rounded-full w-5 h-5 bg-green1">
                  <IoIosCall className="text-xl  text-yellow" />
                </div>
                <p className="text-white">+82101234567</p>
              </div>
              <div className="flex items-center justify-start">
                <div className="flex items-center  justify-between rounded-full w-5 h-5 bg-green1">
                  <FaMessage className="text-xl px-1 text-yellow" />
                </div>
                <p className="text-white">example@gmail.com</p>
              </div>
            </div>
            <div className="flex justify-end items-center">
              <div className="flex justify-evenly items-center gap-4 py-2 px-4">
                <div className="flex items-center  justify-center rounded-full w-5 h-5 bg-green1">
                  <FaFacebook className="text-xl text-yellow" />
                </div>
                <div className="flex items-center justify-center rounded-full w-5 h-5 bg-green1">
                  <FaTwitter className="text-xl text-yellow" />
                </div>
                <div className="flex items-center justify-center rounded-full w-5 h-5 bg-green1">
                  <FaPinterest className="text-xl text-yellow" />
                </div>
                <div className="flex items-center justify-center rounded-full w-5 h-5 bg-green1">
                  <FaInstagramSquare className="text-xl text-yellow" />
                </div>
                <div className="flex items-center justify-center rounded-full w-5 h-5 bg-green1">
                  <FaYoutube className="text-xl text-yellow" />
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}
