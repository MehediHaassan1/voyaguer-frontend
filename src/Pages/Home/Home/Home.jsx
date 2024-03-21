import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import SearchTours from "../SearchTours/SearchTours";
import TourType from "../TourType/TourType";
import TouristsStory from "../TouristsStory/TouristsStory";
import SpecialOffer from "../SpecialOffer/SpecialOffer";
import PopularDestinations from "../PopularDestinations/PopularDestinations";
import PopularPackages from "../PopularPackages/PopularPackages";
import Testimonials from "../Testimonials/Testimonials";
import Blogs from "../../Shared/Blogs/Blogs";
import Overview from "../Overview/Overview";
import OurGuides from "../OurGuides/OurGuides";

const Home = () => {
    const user = false;
    return (
        <div className="h-full">
            <Helmet>
                <title>Home - Voyaguer</title>
            </Helmet>
            <Banner></Banner>
            <SearchTours></SearchTours>
            <Overview></Overview>
            <TourType></TourType>
            <PopularDestinations></PopularDestinations>
            <PopularPackages></PopularPackages>
            <OurGuides></OurGuides>
            <TouristsStory></TouristsStory>
            {!user && <SpecialOffer></SpecialOffer>}
            <Testimonials></Testimonials>
            <Blogs></Blogs>
        </div>
    );
};

export default Home;
