import Line from "../../features/home/Line";
import { FaBook } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

export default function TeacherHeader() {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex flex-col items-center justify-between mt-28 pt-4 w-full h-auto container gap-6">
        <div className="lg:flex justify-center md:justify-start hidden items-center lg:gap-4 md:gap-1 gap-1 pt-1  md:pt-5 lg:pb-6">
          <div className="md:flex shadow-xl2 items-center justify-center rounded-full p-2 bg-green hidden">
            <FaBook className="md:text-xl lg:text-xl sm:text-xl text-base text-white" />
          </div>
          <p className="lg:text-2xl md:text-xl text-center text-xl">
            {t("teacher")}
          </p>
        </div>
        <h1 className="lg:text-5xl text-2xl text-center font-bold text-green2 mb-4 lg:mt-0 mt-8">
          {t("teacher_h1")} <br />
          <span className="text-gray-600">{t("teacher_h2")}</span>
        </h1>
        <p className="lg:text-xl sm:text-md text-gray-600 text-center mb-8 w-full">
          {t("teacher_p")}
        </p>
      </div>
      <Line />
    </>
  );
}
