import { FaStar } from "react-icons/fa6";
import VideContent from "/public/images/videocontent.png";

type Props = {};

const AboutUs = (props: Props) => {
  return (
    <div className="lg:container md:mx-10 sm:mx-5 mx-1">
      <div className="flex  flex-col-reverse  sm:flex-col-reverse  md:flex-row lg:flex-row">
        <div className="flex items-center justify-center">
          <div className="relative  flex items-start justify-center  sm:z-30">
            <div
              className="flex items-center drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] md:text-sm lg:text-sm text-xs sm:text-xs 
                    object-cover justify-start gap-2 absolute px-1 z-40 bg-yellow  boder rounded-xl"
            >
              <div className="flex items-center justify-center rounded-full w-6 h-6 bg-bgGreen">
                <FaStar className="text-sm text-white" />
              </div>
              <p className="">See this Example</p>
            </div>
            <img
              src={VideContent}
              alt="VideContent"
              className="border-black sm:w-[300px] lg:w-[800px] md:w-[700px] w-[250px] rounded-2xl"
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div>
            <div className="flex justify-start items-center pt-1  md:pt-5 lg:pb-6">
              <p className="lg:text-2xl md:text-xl text-base sm:text-xl">
                - About Us -
              </p>
            </div>
            <p className="lg:text-4xl md:text-3xl sm:text-2xl text-xl lg:p-5 md:p-2 p-1">
              <span className="text-bgGreen">Your Top Choice</span> for <br />
              learning Korean
            </p>
            <p className="text-gray-600 lg:p-5 md:p-2 p-1 text-xs md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              quam et sapien sed magna placerat. Donec vel neque et nunc gravida
              ultricies. Vivamus sed diam non
            </p>
            <div className="flex justify-center items-center gap-5 lg:p-4 md:p-3 sm:p-2 p-2">
              <div>
                <p className="lg:text-4xl md:text-3xl sm:text-2xl text-xl lg:p-5 md:p-2 p-1 text-bgGreen">
                  1000+
                </p>
                <p className="lg:p-5 md:p-2 p-1 text-xs md:text-base">
                  {" "}
                  All graduated
                </p>
              </div>
              <div>
                <p className="lg:text-4xl md:text-3xl sm:text-2xl text-xl lg:p-5 md:p-2 p-1 text-bgGreen">
                  20+
                </p>
                <p className="lg:p-5 md:p-2 p-1 text-xs md:text-base">
                  Experts
                </p>
              </div>
              <div>
                <p className="lg:text-4xl md:text-3xl sm:text-2xl text-xl lg:p-5 md:p-2 p-1 text-bgGreen">
                  99%
                </p>
                <p className="lg:p-5 md:p-2 p-1 text-xs md:text-base">Result</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
