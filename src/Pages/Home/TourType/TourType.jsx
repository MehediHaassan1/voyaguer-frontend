import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

// icons
import { MdInsights, MdFamilyRestroom } from "react-icons/md";
import { GiMagicBroom, GiWildfires, GiCruiser } from "react-icons/gi";
import { TbTrekking, TbMoodDollar } from "react-icons/tb";
import { CgLinear } from "react-icons/cg";
import { LuTrees } from "react-icons/lu";

const TourType = () => {
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

    // Array of tour types
    const tourTypes = [
        { icon: <MdInsights />, title: "Sightseeing Tours" },
        { icon: <GiMagicBroom />, title: "Adventure Tours" },
        { icon: <GiWildfires />, title: "Wildlife Tours" },
        { icon: <GiCruiser />, title: "Cruise Tours" },
        { icon: <MdFamilyRestroom />, title: "Family Tours" },
        { icon: <TbTrekking />, title: "Trekking Tours" },
        { icon: <TbMoodDollar />, title: "Luxury Tours" },
        { icon: <CgLinear />, title: "Cultural Tours" },
        { icon: <LuTrees />, title: "Eco Tours" },
    ];

    return (
        <div className="max-w-screen-xl mx-auto min-h-96 mt-16">
            <div className="text-center  space-y-5 text-white">
                <h1
                    className="text-3xl lg:text-5xl"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    Tour type
                </h1>
                <p
                    className="md:text-xl font-mono"
                    data-aos="fade-up"
                    data-aos-delay="300"
                >
                    Embark on an Adventure of a Lifetime: Where Every Step Tells
                    a Story!
                </p>
            </div>
            <div>
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
                        {tourTypes.map((type, index) => (
                            <SwiperSlide className="cursor-pointer" key={index}>
                                <div
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100 + 50}
                                    className="relative w-56 h-56 text-white flex flex-col items-center justify-center group overflow-hidden"
                                >
                                    <div className="text-6xl group-hover:text-orange-700 transition-colors duration-300 ease-in-out text-center">
                                        {type.icon}
                                    </div>
                                    <h1 className="w-full h-0 mt-2 group-hover:text-orange-700 transition-all duration-300 ease-in-out group-hover:h-16 group-hover:w-full group-hover:origin-top opacity-0 group-hover:opacity-100 text-xl  text-center uppercase font-semibold">
                                        {type.title}
                                    </h1>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default TourType;
