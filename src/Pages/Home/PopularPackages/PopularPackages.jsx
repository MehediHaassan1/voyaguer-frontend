import ReactStarsRating from "react-awesome-stars-rating";
import { GoStopwatch } from "react-icons/go";
import { Link } from "react-router-dom";

const PopularPackages = () => {
    const tripData = [
        {
            _id: 1,
            tripName: "Cox's Bazar",
            location: "Cox’s Bazar",
            image: "https://images.unsplash.com/photo-1619177383949-f03975e50b19?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            price: 750,
            duration: "3 days",
            description: `Explore the picturesque town of Cox's Bazar and its neighboring islands on this two-day tour`,
            review: 4.1,
            reviewCount: 12,
        },
        {
            _id: 2,
            tripName: "Cox's Bazar",
            location: "Cox’s Bazar",
            image: "https://images.unsplash.com/photo-1619177383949-f03975e50b19?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            price: 750,
            duration: "2 days",
            description: `Explore the picturesque town of Cox's Bazar and its neighboring islands on this two-day tour`,
            review: 4.5,
            reviewCount: 17,
        },
        {
            _id: 3,
            tripName: "Cox's Bazar",
            location: "Cox’s Bazar",
            image: "https://images.unsplash.com/photo-1619177383949-f03975e50b19?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            price: 750,
            duration: "6 days",
            description: `Explore the picturesque town of Cox's Bazar and its neighboring islands on this two-day tour`,
            review: 4,
            reviewCount: 21,
        },
    ];
    return (
        <div className="max-w-screen-xl mx-auto mt-16">
            <div className="text-center text-white" data-aos="fade-up">
                <h1 className="text-3xl lg:text-5xl ont-bold ">
                    Best value trips
                </h1>
                <p className="font-mono md:text-xl mt-4">
                    Best offers trips from us
                </p>
            </div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-10">
                {tripData.map((trip, index) => (
                    <div
                        key={index}
                        className="text-white group hover:cursor-pointer shadow-2xl"
                    >
                        <div data-aos="fade-up" data-aos-delay={index * 100}>
                            <div className="relative">
                                <img
                                    src={trip.image}
                                    alt={trip.tripName}
                                    className="h-56 w-full"
                                />
                                <div className="py-2 px-4 bg-orange-700 text-xl w-fit absolute bottom-4   font-semibold tracking-wide transition-transform group-hover:scale-125">
                                    <span>$</span>
                                    <span>{trip.price}</span>
                                </div>
                            </div>
                            <div className="pl-4 pt-6">
                                <h1 className="text-2xl font-black">
                                    {trip.tripName}
                                </h1>
                                <p className="md:text-xl font-mono mt-4">
                                    {trip.description}
                                </p>
                            </div>
                            <div className="pl-4 mt-10 pb-5 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <ReactStarsRating
                                        value={trip.review}
                                        className="flex text-orange-700"
                                        isEdit={false}
                                        primaryColor="#C2410C"
                                        secondaryColor="#fff"
                                        size={20}
                                    />
                                    <p>{trip.reviewCount} reviews</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <GoStopwatch className="w-6 h-6 text-orange-700" />
                                    {trip.duration}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-10">
                <Link className="my-btn-hover text-white py-1 px-3 bg-orange-700 hover:bg-transparent hover:text-orange-700 duration-300 font-bold tracking-wide">
                    {" "}
                    See more
                </Link>
            </div>
        </div>
    );
};

export default PopularPackages;
