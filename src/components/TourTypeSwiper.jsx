import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";

// icons
import { MdInsights, MdFamilyRestroom } from "react-icons/md";
import { GiMagicBroom, GiWildfires, GiCruiser } from "react-icons/gi";
import { TbTrekking, TbMoodDollar } from "react-icons/tb";
import { CgLinear } from "react-icons/cg";
import { LuTrees } from "react-icons/lu";
import {} from "react-icons/gi";

const TourTypeSwiper = () => {
    const [slidesPerView, setSlidesPerView] = useState(3);

    useEffect(() => {
        const updateSlidesPerView = () => {
            if (window.innerWidth < 640) {
                setSlidesPerView(2);
            } else if (window.innerWidth < 768) {
                setSlidesPerView(3);
            } else {
                setSlidesPerView(4);
            }
        };
        updateSlidesPerView();

        window.addEventListener("resize", updateSlidesPerView);
        return () => {
            window.removeEventListener("resize", updateSlidesPerView);
        };
    }, []);
    return (
        <div className="max-w-screen-lg mx-auto flex justify-center items-center h-full">
            <Swiper
                slidesPerView={slidesPerView}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    // disableOnInteraction: true,
                }}
                modules={[Pagination, Autoplay]}
                className=""
            >
                <SwiperSlide className="cursor-pointer">
                    <div className="relative w-56 h-56 text-white flex flex-col items-center justify-center group overflow-hidden">
                        <MdInsights className="w-20 h-20 group-hover:text-orange-700 transition-colors duration-300 ease-in-out" />
                        <h1 className="w-full h-0 group-hover:text-orange-700 transition-all duration-300 ease-in-out group-hover:h-16 group-hover:w-full group-hover:origin-top opacity-0 group-hover:opacity-100 text-xl  text-center uppercase font-semibold">
                            Sightseeing Tours
                        </h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="cursor-pointer">
                    <div className="relative w-56 h-56 text-white flex flex-col items-center justify-center group overflow-hidden">
                        <GiMagicBroom className="w-20 h-20 group-hover:text-orange-700 transition-colors duration-300 ease-in-out" />
                        <h1 className="w-full h-0 group-hover:text-orange-700 transition-all duration-300 ease-in-out group-hover:h-16 group-hover:w-full group-hover:origin-top opacity-0 group-hover:opacity-100 text-xl  text-center uppercase font-semibold">
                            Adventure Tours
                        </h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="cursor-pointer">
                    <div className="relative w-56 h-56 text-white flex flex-col items-center justify-center group overflow-hidden">
                        <GiWildfires className="w-20 h-20 group-hover:text-orange-700 transition-colors duration-300 ease-in-out" />
                        <h1 className="w-full h-0 group-hover:text-orange-700 transition-all duration-300 ease-in-out group-hover:h-16 group-hover:w-full group-hover:origin-top opacity-0 group-hover:opacity-100 text-xl  text-center uppercase font-semibold">
                            Wildlife Tours
                        </h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="cursor-pointer">
                    <div className="relative w-56 h-56 text-white flex flex-col items-center justify-center group overflow-hidden">
                        <TbTrekking className="w-20 h-20 group-hover:text-orange-700 transition-colors duration-300 ease-in-out" />
                        <h1 className="w-full h-0 group-hover:text-orange-700 transition-all duration-300 ease-in-out group-hover:h-16 group-hover:w-full group-hover:origin-top opacity-0 group-hover:opacity-100 text-xl  text-center uppercase font-semibold">
                            Trekking Tours
                        </h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="cursor-pointer">
                    <div className="relative w-56 h-56 text-white flex flex-col items-center justify-center group overflow-hidden">
                        <TbMoodDollar className="w-20 h-20 group-hover:text-orange-700 transition-colors duration-300 ease-in-out" />
                        <h1 className="w-full h-0 group-hover:text-orange-700 transition-all duration-300 ease-in-out group-hover:h-16 group-hover:w-full group-hover:origin-top opacity-0 group-hover:opacity-100 text-xl  text-center uppercase font-semibold">
                            Luxury Tours
                        </h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="cursor-pointer">
                    <div className="relative w-56 h-56 text-white flex flex-col items-center justify-center group overflow-hidden">
                        <CgLinear className="w-20 h-20 group-hover:text-orange-700 transition-colors duration-300 ease-in-out" />
                        <h1 className="w-full h-0 group-hover:text-orange-700 transition-all duration-300 ease-in-out group-hover:h-16 group-hover:w-full group-hover:origin-top opacity-0 group-hover:opacity-100 text-xl  text-center uppercase font-semibold">
                            Cultural Tours
                        </h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="cursor-pointer">
                    <div className="relative w-56 h-56 text-white flex flex-col items-center justify-center group overflow-hidden">
                        <LuTrees className="w-20 h-20 group-hover:text-orange-700 transition-colors duration-300 ease-in-out" />
                        <h1 className="w-full h-0 group-hover:text-orange-700 transition-all duration-300 ease-in-out group-hover:h-16 group-hover:w-full group-hover:origin-top opacity-0 group-hover:opacity-100 text-xl  text-center uppercase font-semibold">
                            Eco Tours
                        </h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="cursor-pointer">
                    <div className="relative w-56 h-56 text-white flex flex-col items-center justify-center group overflow-hidden">
                        <GiCruiser className="w-20 h-20 group-hover:text-orange-700 transition-colors duration-300 ease-in-out" />
                        <h1 className="w-full h-0 group-hover:text-orange-700 transition-all duration-300 ease-in-out group-hover:h-16 group-hover:w-full group-hover:origin-top opacity-0 group-hover:opacity-100 text-xl  text-center uppercase font-semibold">
                            Cruise Tours
                        </h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="cursor-pointer">
                    <div className="relative w-56 h-56 text-white flex flex-col items-center justify-center group overflow-hidden">
                        <MdFamilyRestroom className="w-20 h-20 group-hover:text-orange-700 transition-colors duration-300 ease-in-out" />
                        <h1 className="w-full h-0 group-hover:text-orange-700 transition-all duration-300 ease-in-out group-hover:h-16 group-hover:w-full group-hover:origin-top opacity-0 group-hover:opacity-100 text-xl  text-center uppercase font-semibold">
                            Family Tours
                        </h1>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default TourTypeSwiper;
