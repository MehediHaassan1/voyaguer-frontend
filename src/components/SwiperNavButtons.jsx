import { useSwiper } from "swiper/react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const SwiperNavButtons = () => {
    const swiper = useSwiper();
    return (
        <div className="swiper-nav-btns">
            <button className="swiper-btns" onClick={() => swiper.slidePrev()}>
                <MdKeyboardArrowLeft></MdKeyboardArrowLeft>
            </button>
            <button className="swiper-btns" onClick={() => swiper.slideNext()}>
                <MdKeyboardArrowRight></MdKeyboardArrowRight>
            </button>
        </div>
    );
};

export default SwiperNavButtons;
