import Teacher from "/public/images/teacher.png";
import { useTranslation } from "react-i18next";

type Props = {};

const AboutUs = (props: Props) => {
  const { t } = useTranslation();
  return (
    <div className="md:container md:px-10 sm:px-5 my-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="flex justify-center items-center ">
          <div className="w-full">
            <div className="w-full flex justify-start items-center md:pt-5 lg:pb-2">
              <p className="w-full lg:text-2xl md:text-xl text-base sm:text-xl text-center lg:text-left">
                - {t("about_us_h1")} -
              </p>
            </div>
            <p className="w-full lg:text-5xl md:text-3xl sm:text-2xl text-xl lg:ml-4 md:p-2 p-1 font-medium text-center text-green lg:text-left">
              {t("about_us_h2")}
            </p>
            <p className="w-full text-gray-600 md:p-2 p-1 md:text-xl text-md text-center lg:text-left">
              {t("about_us_p")}
            </p>
            <div className="flex justify-center items-center md:gap-10 gap-8 lg:p-4 md:p-3 sm:p-2 p-2">
              <div className="flex flex-col justify-center items-center">
                <p className="lg:text-5xl md:text-4xl text-3xl md:p-2 p-1 text-orange font-bold">
                  1000+
                </p>
                <p className="md:p-2 text-xs md:text-lg lg:text-xl font-bold text-orange">
                  {" "}
                  {t("about_us_graduate")}
                </p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className="lg:text-5xl md:text-4xl text-3xl md:p-2 p-1 text-blue font-bold">
                  20+
                </p>
                <p className="md:p-2 text-xs md:text-lg lg:text-xl font-bold text-blue">
                  {t("about_us_experts")}
                </p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className="lg:text-5xl md:text-4xl text-3xl md:p-2 p-1 text-red font-bold">
                  99%
                </p>
                <p className="md:p-2 md:text-lg lg:text-xl font-bold text-red">
                  {t("about_us_result")}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center cursor-pointer">
          <img
            src={Teacher}
            alt="Teacher"
            className="sm:w-[300px] md:w-[500px] w-[250px] rounded-2xl object-cover bg-orange hover:shadow-xl2 hover:scale-105 transition-all duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
