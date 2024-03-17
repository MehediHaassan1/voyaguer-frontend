import { Link } from "react-router-dom";

const SpecialOffer = () => {
    return (
        <div
            className="h-80 w-full bg-[url(https://images.unsplash.com/photo-1500018208634-e633087e3bb1?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-bottom mt-16"
            data-aos="fade-up"
        >
            <div className="bg-[#F16D2A]/90 w-full h-full">
                <div className="max-w-screen-xl mx-auto h-full py-16 px-4 md:px-10 text-white flex items-center justify-between gap-4 md:justify-around">
                    <div className="md:w-1/2 flex items-center justify-center">
                        <div className="space-y-2">
                            <h3 className="font-mono md:text-xl ">
                                Go & Discover
                            </h3>
                            <h3 className="text-3xl md:text-5xl font-bold">
                                Get Special Offer
                            </h3>
                            <p className="font-mono md:text-xl">
                                Don't Miss Out: Get Exclusive Savings with Our
                                Special Offers!
                            </p>
                            <button className="py-2 px-3 bg-white text-orange-700 font-bold tracking-wide rounded mt-4 btn">
                                <Link>Crate an account</Link>
                            </button>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex items-center justify-center">
                        <div className="relative ">
                            <h1 className="font-black">
                                <span className="text-6xl md:text-9xl">35</span>
                                <span className="text-3xl md:text-6xl">%</span>
                            </h1>
                            <p className="text-3xl md:text-6xl uppercase font-black rounded-full bg-[#F16D2A] text-center absolute -bottom-6 left-6 md:-bottom-10 md:left-20 py-1 px-4">
                                off
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialOffer;
