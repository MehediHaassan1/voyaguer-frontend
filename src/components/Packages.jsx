import { useState } from "react";
import { FaRegHeart, FaHeart, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Packages = () => {
    const packagesData = [
        {
            image: "https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            tourTitle: "The Majestic and Wonderful Bahamas",
            tourType: "City",
            ratings: 4.5,
            totalReviews: 123,
            pricePerPerson: 119,
        },
        {
            image: "https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            tourTitle: "The Majestic Bahamas",
            tourType: "Vacation",
            ratings: 4.3,
            totalReviews: 73,
            pricePerPerson: 129,
        },
        // {
        //     image: "https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        //     tourTitle: "The Wonderful Bahamas",
        //     tourType: "Summer",
        //     ratings: 4.2,
        //     totalReviews: 23,
        //     pricePerPerson: 99,
        // },
    ];
    const [wishList, setWishList] = useState(false);
    return (
        <div className="max-w-screen-xl mx-auto">
            <div className="max-w-screen-xl mx-auto space-y-8 lg:space-y-0 grid grid-cols-1 lg:grid-cols-2 lg:gap-6 relative">
                {packagesData.map((data, index) => (
                    <div
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                        key={index}
                        className="flex flex-col justify-center items-center mx-auto"
                    >
                        <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white glass">
                            <div className="w-full md:w-2/5  grid place-items-center">
                                <img
                                    src={data.image}
                                    alt="tailwind logo"
                                    className="rounded-xl w-64 h-64"
                                />
                            </div>
                            <div className="md:w-3/5 w-[296px] text-white flex flex-col justify-center space-y-4 p-3">
                                <div className="flex justify-between item-center">
                                    <p className="bg-[#DE7017] px-3 py-1 rounded-full text-xs font-medium">
                                        {data.tourType}
                                    </p>
                                    <div className="flex items-center link link-hover">
                                        <FaStar className="h-5 w-5 text-yellow-500"></FaStar>
                                        <p className="text-gray-600 font-bold text-sm ml-1">
                                            {data.ratings}
                                            <span className="text-gray-500 font-normal">
                                                {" "}
                                                ({data.totalReviews})
                                            </span>
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => setWishList(!wishList)}
                                        className=""
                                    >
                                        {wishList ? (
                                            <FaHeart className="w-5 h-5 text-red-500"></FaHeart>
                                        ) : (
                                            <FaRegHeart className="w-5 h-5"></FaRegHeart>
                                        )}
                                    </button>
                                </div>
                                <h3 className="font-black text-gray-300 md:text-3xl text-xl">
                                    {data.tourTitle}
                                </h3>
                                <div className="flex items-center justify-between">
                                    <p className="text-2xl font-black text-gray-300">
                                        ${data.pricePerPerson}
                                        <span className="font-normal text-gray-400 text-base">
                                            /person
                                        </span>
                                    </p>
                                    <button className="text-lg font-black text-gray-300 bg-[#DE7017]/70 hover:bg-[#DE7017] duration-300 py-1 px-4 rounded">
                                        Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center my-10">
                <Link className="text-white">See More</Link>
            </div>
        </div>
    );
};

export default Packages;
