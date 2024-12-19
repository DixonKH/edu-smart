import React from 'react'
import { FaStar } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';

type Props = {}

const Line = (props: Props) => {
  const { t } = useTranslation();
  return (
    <div>
    
        <div className=" gap-5 bg-green1 my-4 lg:py-3 md:py-2 sm:py-1 py-1 ">
        <div className="flex justify-between items-center text-white lg:mx-5 md:mx-2 mx-1">
          <div className="flex justify-start items-center gap-2   px-1  ">
            <div className="flex items-center justify-center rounded-full w-6 h-6 bg-bgGreen">
              <FaStar className="text-3xl text-yellow" />
            </div>
            <p className="md:text-base  hidden sm:hidden md:flex lg:flex">{t("line_1")}</p>
          </div>
          <div className="flex justify-start items-center gap-2  px-1   ">
            <div className="flex items-center justify-center rounded-full w-6 h-6 bg-bgGreen">
              <FaStar className="text-xl text-yellow" />
            </div>
            <p className="text-xl md:text-base hidden sm:hidden md:flex lg:flex">{t("line_2")}</p>
          </div>
          <div className="flex justify-start items-center gap-2   px-1 ">
            <div className="flex items-center justify-center rounded-full w-6 h-6 bg-bgGreen">
              <FaStar className="text-xl text-yellow" />
            </div>
            <p className="text-xl md:text-base hidden sm:hidden md:flex lg:flex">{t("line_3")}</p>
          </div>
          <div className="flex justify-start items-center gap-2   px-1  ">
            <div className="flex items-center justify-center rounded-full w-6 h-6 bg-bgGreen">
              <FaStar className="text-xl text-yellow" />
            </div>
            <p className="text-xl md:text-base hidden sm:hidden md:flex lg:flex">{t("line_4")}</p>
          </div>
          <div className="flex justify-start items-center gap-2   px-1 ">
            <div className="flex items-center justify-center rounded-full w-6 h-6 bg-bgGreen">
              <FaStar className="text-xl text-yellow" />
            </div>
            <p className="text-xl md:text-base hidden sm:hidden md:flex lg:flex">{t("line_5")}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Line