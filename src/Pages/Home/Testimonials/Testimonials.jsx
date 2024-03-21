import ReactStarsRating from "react-awesome-stars-rating";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/navigation";
import { Navigation, EffectCreative, Autoplay } from "swiper/modules";
import SwiperNavButtons from "../../../components/SwiperNavButtons";

const Testimonials = () => {
    const data = [
        {
            _id: 1,
            reviewTitle: "Cox's Bazar 1",
            review: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo porro repudiandae distinctio cupiditate ad veritatis nihil cumque rerum, ducimus officiis assumenda quos modi! Velit consequatur eos deserunt assumenda nemo! Ex natus eligendi minima nihil vitae optio quidem nulla velit tenetur itaque, tempora dolore laudantium, placeat corporis beatae ea expedita molestias, nostrum totam sint ipsum sed nobis id!",
            rating: 4.5,
            creator: "John Mark",
            creatorIMG:
                "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
        },
        {
            _id: 2,
            reviewTitle: "Cox's Bazar 2",
            review: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo porro repudiandae distinctio cupiditate ad veritatis nihil cumque rerum, ducimus officiis assumenda quos modi! Velit consequatur eos deserunt assumenda nemo! Ex natus eligendi minima nihil vitae optio quidem nulla velit tenetur itaque, tempora dolore laudantium, placeat corporis beatae ea expedita molestias, nostrum totam sint ipsum sed nobis id!",
            rating: 4,
            creator: "John Doe",
            creatorIMG:
                "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
        },
        {
            _id: 3,
            reviewTitle: "Cox's Bazar 3",
            review: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo porro repudiandae distinctio cupiditate ad veritatis nihil cumque rerum, ducimus officiis assumenda quos modi! Velit consequatur eos deserunt assumenda nemo! Ex natus eligendi minima nihil vitae optio quidem nulla velit tenetur itaque, tempora dolore laudantium, placeat corporis beatae ea expedita molestias, nostrum totam sint ipsum sed nobis id!",
            rating: 3,
            creator: "JK Rowlling",
            creatorIMG:
                "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
        },
    ];
    return (
        <div className="mt-16 min-h-96">
            <div className="max-w-screen-xl mx-auto">
                <div className="text-center text-white" data-aos="fade-up">
                    <h1 className="text-3xl lg:text-5xl ont-bold ">
                        What’s Our Client’s Words
                    </h1>
                    <p className="font-mono md:text-xl mt-4">
                        Expand your message globally
                    </p>
                </div>
                <div
                    className="max-w-screen-lg mx-auto"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    <Swiper
                        effect={"creative"}
                        creativeEffect={{
                            prev: {
                                shadow: true,
                                translate: [0, 0, -400],
                            },
                            next: {
                                translate: ["100%", 0, 0],
                            },
                        }}
                        autoplay={{
                            delay: 2500,
                        }}
                        loop={true}
                        modules={[Navigation, EffectCreative, Autoplay]}
                        className="relative"
                    >
                        {data.map((review) => (
                            <SwiperSlide key={review._id}>
                                <div className="bg-[#0D141A] p-4 text-white">
                                    <h1 className="text-3xl font-semibold">
                                        {review.reviewTitle}
                                    </h1>
                                    <div className="flex items-center gap-4 my-2 lg:my-4">
                                        <ReactStarsRating
                                            value={review.rating}
                                            className="flex text-orange-700"
                                            isEdit={false}
                                            primaryColor="#C2410C"
                                            secondaryColor="grey"
                                            size={20}
                                        />
                                    </div>
                                    <p className="text-xs font-mono lg:text-lg mb-2 lg:mb-4">
                                        {review.review}
                                    </p>
                                    <div className="avatar items-center gap-6">
                                        <div className="w-12 rounded-full">
                                            <img src={review.creatorIMG} />
                                        </div>
                                        <span className="font-bold text-xl">
                                            {review.creator}
                                        </span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}

                        <div className="absolute bottom-0 right-0 z-10 pb-4">
                            <SwiperNavButtons></SwiperNavButtons>
                        </div>
                    </Swiper>
                </div>
            </div>
            {/* <div className="max-w-screen-xl mx-auto">
                <div className="rounded overflow-hidden" data-aos="fade-up">
                    <div>
                        <h1 className="text-3xl font-bold mb-2 lg:mb-4 text-center">
                            Top Reviews
                        </h1>
                        <Swiper
                            effect={"creative"}
                            creativeEffect={{
                                prev: {
                                    shadow: true,
                                    translate: [0, 0, -400],
                                },
                                next: {
                                    translate: ["100%", 0, 0],
                                },
                            }}
                            autoplay={{
                                delay: 2500,
                            }}
                            loop={true}
                            modules={[Navigation, EffectCreative, Autoplay]}
                            className="relative"
                        >
                            {data.map((review) => (
                                <SwiperSlide key={review._id}>
                                    <div className="bg-[#0D141A] p-4 text-white">
                                        <h1 className="text-3xl font-semibold">
                                            {review.reviewTitle}
                                        </h1>
                                        <div className="flex items-center gap-4 my-2 lg:my-4">
                                            <ReactStarsRating
                                                value={review.rating}
                                                className="flex text-orange-700"
                                                isEdit={false}
                                                primaryColor="#C2410C"
                                                secondaryColor="grey"
                                                size={20}
                                            />
                                        </div>
                                        <p className="text-xs font-mono lg:text-lg mb-2 lg:mb-4">
                                            {review.review}
                                        </p>
                                        <div className="avatar items-center gap-6">
                                            <div className="w-12 rounded-full">
                                                <img src={review.creatorIMG} />
                                            </div>
                                            <span className="font-bold text-xl">
                                                {review.creator}
                                            </span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}

                            <div className="absolute bottom-0 right-0 z-10 pb-4">
                                <SwiperNavButtons></SwiperNavButtons>
                            </div>
                        </Swiper>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Testimonials;
