import { FaInstagramSquare } from "react-icons/fa";
import {
  FaFacebook,
  FaPinterest,
  FaTwitter,
  FaYoutube,
  FaTelegram,
} from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";
import Line from "./Line";
import { useTranslation } from "react-i18next";

function ContactUs() {
  const { t } = useTranslation();
  return (
    <div>
      <div className="w-full flex my-20 lg:container md:px-10 sm:px-5 px-1">
        <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-around pt-6 lg:pt-0 bg-green1 border rounded-3xl text-white text-lg">
          <div className="flex flex-col justifty-center text-center md:text-left mb-8 lg:mb-2">
            <div className="lg:m-8 lg:mb-0">
              <p className="p-5 text-2xl md:text-3xl">{t("contact_address")}:</p>
              <p className="px-5 text-md text-slate-300">
                Toshkent Shaxar Mirzo Ulugbek ko'chasi. <br />
                Hilton mehmonxona ro'parasi
              </p>
            </div>
            <div className="lg:m-8 lg:mb-0">
              <p className="p-5 text-2xl md:text-3xl">{t("contact_Contact")}:</p>
              <p className="px-5 text-md text-slate-300">
                Phone: +82101234567 <br />
                Email: example@example.com
              </p>
            </div>
            <div className="lg:m-8">
              <p className="p-5 text-2xl md:text-3xl">{t("contact_time")}:</p>
              <p className="px-5 text-md text-slate-300">
                Monday-Friday: 9:00 - 20:00 <br />
                Saturday: 10:00 - 16:00 <br />
                Sunday: Closed
              </p>
            </div>
          </div>
          <div className="lg:m-8">
            <p className="lg:p-5 p-3 text-2xl md:text-3xl font-medium">
              {t("contact_stay")}:
            </p>
            <div className=" p-5 text-md">
              <div className="w-full flex flex-col justify-start lg:gap-12 md:gap-5 sm:gap-3 gap-3 items-start">
                <div className="flex items-center gap-4">
                  <a
                    href="https://www.telegram.com/example"
                    className="flex items-center justify-center drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover rounded-full w-10 h-10 bg-yellow"
                  >
                    <FaTelegram className="text-xl text-black" />
                  </a>
                  <p className="text-2xl">Telegram</p>
                </div>
                <div className="flex items-center gap-4">
                  <a
                    href="https://www.facebook.com/example"
                    className="flex items-center justify-center drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover rounded-full w-10 h-10 bg-yellow"
                  >
                    <FaFacebook className="text-xl text-black" />
                  </a>
                  <p className="text-2xl">Facebook</p>
                </div>
                <div className="flex items-center gap-4">
                  <a
                    href="https://www.instagram.com/example"
                    className="flex items-center justify-center drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover rounded-full w-10 h-10 bg-yellow"
                  >
                    <FaInstagramSquare className="text-xl text-black" />
                  </a>
                  <p className="text-2xl">Instagram</p>
                </div>
                <div className="flex items-center gap-4">
                  <a
                    href="https://www.youtube.com/example"
                    className="flex items-center justify-center drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover rounded-full w-10 h-10 bg-yellow"
                  >
                    <FaYoutube className="text-xl text-black" />
                  </a>
                  <p className="text-2xl">Youtube</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Line />
    </div>
  );
}

export default ContactUs;
