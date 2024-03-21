import { useState } from "react";
import ReactStarsRating from "react-awesome-stars-rating";
import { GoStopwatch } from "react-icons/go";

const PackageCard = ({ data }) => {
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
            </div>
            <div className="pl-4 pt-6">
                <h1 className="text-2xl font-black">{data.tripName}</h1>
                <p className="md:text-xl font-mono mt-4">{data.description}</p>
            </div>
            <div className="px-4 pb-5 mt-10 space-y-4 lg:space-y-0 lg:flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <ReactStarsRating
                        value={data.review}
                        className="flex text-orange-700"
                        isEdit={false}
                        primaryColor="#C2410C"
                        secondaryColor="#fff"
                        size={20}
                    />
                    <p>{data.reviewCount} reviews</p>
                </div>
                <div className="flex items-center gap-4">
                    <GoStopwatch className="w-6 h-6 text-orange-700" />
                    {data.duration}
                </div>
            </div>
        </div>
    );
};

export default PackageCard;
