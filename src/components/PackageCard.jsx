import { useState } from "react";
import ReactStarsRating from "react-awesome-stars-rating";
import { GoStopwatch } from "react-icons/go";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import useUserAuth from "../hooks/useUserAuth";

const PackageCard = ({ data }) => {
    const { user } = useUserAuth();
    const [wishList, setWishList] = useState(false);
    return (
        <div>
            <div className="relative">
                <img
                    src={data.image}
                    alt={data.tripName}
                    className="h-56 w-full"
                />
                <div className="py-2 px-4 bg-orange-700 text-xl w-fit absolute bottom-4   font-semibold tracking-wide transition-transform group-hover:scale-125">
                    <span>$</span>
                    <span>{data.price}</span>
                </div>
                {user && (
                    <div className="absolute right-0 bottom-0">
                        <button
                            className="btn bg-transparent border-none hover:bg-transparent"
                            onClick={() => setWishList(!wishList)}
                        >
                            {wishList ? (
                                <FaHeart className="h-6 w-6 text-red-600"></FaHeart>
                            ) : (
                                <FaRegHeart className="text-white h-6 w-6"></FaRegHeart>
                            )}
                        </button>
                    </div>
                )}
            </div>
            <div className="pl-4 pt-6">
                <h1 className="text-2xl font-black">{data.tripName}</h1>
                <div className="flex items-center gap-4 mt-2">
                    <ReactStarsRating
                        value={data.review}
                        className="flex text-orange-700"
                        isEdit={false}
                        primaryColor="#C2410C"
                        secondaryColor="#fff"
                        size={20}
                    />
                    <p>({data.reviewCount} reviews)</p>
                </div>
            </div>
            <div className="px-4 pb-5 mt-10 space-y-4 lg:space-y-0 lg:flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <GoStopwatch className="w-6 h-6 text-orange-700" />
                    {data.duration}
                </div>
                <div>
                    <Link className="font-mono flex items-center gap-2 text-orange-700 md:text-xl font-bold">
                        Explore <IoIosArrowRoundForward className="w-8 h-8" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PackageCard;
