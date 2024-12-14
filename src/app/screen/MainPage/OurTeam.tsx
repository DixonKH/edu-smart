import React from "react";
import { FaStar } from "react-icons/fa6";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
const teachers = [
  {
    id: 1,
    name: "John Doe",
    teachCategory: "English",
    image: "/images/saad2.webp",
    experience: "5",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    id: 2,
    name: "Jane Doe",
    teachCategory: "Korean",
    image: "/images/user.jpeg",
    experience: "3",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    id: 3,
    name: "Jim Beam",
    teachCategory: "English",
    image: "/images/user1.jpg",
    experience: "10",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    id: 4,
    name: "John Doe",
    teachCategory: "English",
    image: "/images/user.jpeg",
    experience: "5",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    id: 5,
    name: "John Doe",
    teachCategory: "English",
    image: "/images/user.jpeg",
    experience: "5",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
];

type Props = {};

const OurTeam = (props: Props) => {
  return (
    <div className="lg:container">
      <div>
        <div className="sm:text-center lg:text-left md:px-10 mb-4 md:mb-0 lg:mb-0 px-1 mt-20">
          <p className="lg:text-2xl md:text-xl text-base sm:text-xl text-black">
            - Our Team -
          </p>
          <p className=" lg:text-4xl md:text-3xl sm:text-2xl text-xl lg:p-5 p-2 -mt-2 font-medium">
            Meet Our
            <span className="text-green1"> Professional Team</span>
          </p>
        </div>
      </div>
      <Carousel className="md:px-10 sm:px-5 px-1">
        <CarouselContent className="flex items-center w-full justify-center h-auto gap-5 mb-8">
          {teachers.map((teacher: any) => (
            <CarouselItem
              key={teacher.id}
              className="flex flex-col items-center justify-center px-0 w-full pb-3 md:basis-1/3 lg:basis-1/4 h-auto border-2 bg-green text-white rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <div className="w-full h-80 mb-2 relative">
                <img
                  className="h-full w-full object-cover rounded-xl"
                  src={teacher.image}
                  alt={teacher.name}
                />
                <p className="flex items-center gap-1 text-md text-white absolute bottom-6 bg-green p-2 rounded-r-lg">
                  <FaStar className="text-yellow" />
                  {teacher.experience} years of experience
                </p>
              </div>
              <div className="flex flex-col items-center justify-center w-full h-auto">
                <h1 className="text-2xl font-bold">{teacher.name}</h1>
                <p className="text-md text-white">
                  {teacher.teachCategory} Teacher
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </div>
  );
};

export default OurTeam;
