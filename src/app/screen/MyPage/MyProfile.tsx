import React from "react";

type Props = {};

const MyProfile = (props: Props) => {
  return (
    <div className="lg:container md:px-10 sm:px-5 px-1">
      <div>
        <div className="text-xs md:text-base text-center  italic">My Profile</div>
        <div className="flex justify-center items-center m-3 p-3">
          <div>
            <div className="flex justify-center ">
              <img
                src="https://www.gravatar.com/avatar/205e460b479e2e5b48cfe37510df5244?s=32&amp;d=identicon&amp;r=PG"
                alt="User Avatar"
                className=" border-2 m-3 p-3 border-green rounded-full w-24 h-24"
              />
            </div>
            <p className="flex justify-center text-xs md:text-base">UserName: John Doe</p>
            <p className="flex justify-center text-xs md:text-base">Email: johndoe@example.com</p>
            <p className="flex justify-center text-xs md:text-base">Phone: 123-456-7890</p>
          </div>
        </div>
        <div>
          <div className="p-2 ">
            <label className="text-xs md:text-base">UserName:</label>
            <input
              type="text"
              placeholder="UserName"
              className="sm:w-full w-[100%] text-xs md:text-base rounded-sm border border-gray-300
                        focus:outline-none focus:border-1 focus:border-green"
            />
          </div>
          <div className="flex  items-center">
            <div className="p-2 w-[50%]">
              <label className="text-xs md:text-base">Email:</label>
              <input
                type="text"
                placeholder="Email"
                className="sm:w-full w-[100%] text-xs md:text-base rounded-sm border border-gray-300
                        focus:outline-none focus:border-1 focus:border-green"
              />
            </div>
            <div className="p-2 w-[50%]">
              <label className="text-xs md:text-base">Phone:</label>
              <input
                type="text"
                placeholder="Phone"
                className="sm:w-full w-[100%] text-xs md:text-base rounded-sm border border-gray-300
                        focus:outline-none focus:border-1 focus:border-green"
              />
            </div>
            
          </div>
          <div className="mx-auto text-center flex items-center justify-center  lg:p-3 md:p-2 text-xs md:text-base  ">
              <button className=" w-[200px] sm:w-[150px] border border-green px-3 py-1 flex items-center justify-evenly hover:italic hover:bg-green hover:text-white  rounded-sm">
                + Save Changes
              </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
