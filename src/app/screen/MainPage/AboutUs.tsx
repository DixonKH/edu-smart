import { FaStar } from "react-icons/fa6";
import VideContent from "/public/images/videocontent.png";

type Props = {};

const AboutUs = (props: Props) => {
  return (
    <div className="grid grid-cols-2">
      <div className="m-20">
        <div className="flex drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover justify-start items-center gap-2 absolute px-1 z-40 bg-yellow  boder rounded-xl">
          <div className="flex items-center justify-center rounded-full w-6 h-6 bg-bgGreen">
            <FaStar className="text-sm text-white" />
          </div>
          <p className="text-sm">See this Example</p>
        </div>

        <div className="realtive pl-10 w-[400px] flex items-start  z-30">
          <img
            src={VideContent}
            alt="VideContent"
            className="border-black rounded-2xl"
          />
        </div>
      </div>
      <div className="">
        <div className="flex justify-start items-center gap-4 pt-8 pb-6">
          <p className="text-2xl">- About Us -</p>
        </div>
        <p className="text-4xl p-5">
          <span className="text-bgGreen">Your Top Choice</span> for <br />
          learning Korean
        </p>
        <p className="text-gray-600 p-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non quam
          et sapien sed magna placerat. Donec vel neque et nunc gravida
          ultricies. Vivamus sed diam non
        </p>
        <div className="flex justify-start items-center gap-5 p-4">
          <div>
            <p className="text-2xl font-bold text-bgGreen">1000+</p>
            <p>All graduated</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-bgGreen">20+</p>
            <p>Experts</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-bgGreen">99%</p>
            <p>Result</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
