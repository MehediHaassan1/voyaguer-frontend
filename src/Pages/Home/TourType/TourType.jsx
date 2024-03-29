import { MdInsights } from "react-icons/md";
import { GiMagicBroom, GiWildfires, GiCruiser } from "react-icons/gi";
import { TbTrekking } from "react-icons/tb";
import { CgLinear } from "react-icons/cg";

const TourType = () => {
    // Array of tour types
    const tourTypes = [
        { icon: <MdInsights />, title: "Sightseeing Tours" },
        { icon: <GiMagicBroom />, title: "Adventure Tours" },
        { icon: <GiWildfires />, title: "Wildlife Tours" },
        { icon: <GiCruiser />, title: "Cruise Tours" },
        { icon: <TbTrekking />, title: "Trekking Tours" },
        { icon: <CgLinear />, title: "Cultural Tours" },
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

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 md:gap-6 mt-16 content-center space-y-10 md:space-y-0">
                {tourTypes.map((type, index) => (
                    <div
                        key={index}
                        data-aos="fade-up"
                        data-aos-delay={index * 100 + 50}
                        className="relative w-56 h-56 lg:w-40 lg:h-40 text-white flex flex-col items-center justify-center group overflow-hidden border rounded-full justify-self-center hover:border-orange-700 duration-300 hover:cursor-pointer"
                    >
                        <div className="text-6xl group-hover:text-orange-700 transition-colors duration-300 ease-in-out text-center">
                            {type.icon}
                        </div>
                        <h1 className="w-full lg:h-0 mt-2 group-hover:text-orange-700 transition-all duration-300 ease-in-out lg:group-hover:h-16 group-hover:w-full group-hover:origin-top lg:opacity-0 lg:group-hover:opacity-100 text-sm  text-center uppercase font-semibold">
                            {type.title}
                        </h1>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TourType;
