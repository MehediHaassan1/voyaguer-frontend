import TourTypeSwiper from "../../../components/TourTypeSwiper";

const TourType = () => {
    return (
        <div className="max-w-screen-xl mx-auto min-h-96 mt-16">
            <div className="text-center  space-y-5 text-white">
                <h1
                    className="text-3xl lg:text-5xl abril-fatface-regular"
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
            <div data-aos="fade-up" data-aos-delay="400">
                <TourTypeSwiper></TourTypeSwiper>
            </div>
        </div>
    );
};

export default TourType;
