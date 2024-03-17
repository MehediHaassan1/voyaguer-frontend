import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import SearchTours from "../SearchTours/SearchTours";
import TravelAndTourism from "../TravelAndTourism/TravelAndTourism";
import TourType from "../TourType/TourType";
import TouristsStory from "../TouristsStory/TouristsStory";
import SpecialOffer from "../SpecialOffer/SpecialOffer";
import PopularDestinations from "../PopularDestinations/PopularDestinations";
import PopularPackages from "../PopularPackages/PopularPackages";

const Home = () => {
    const user = false;
    return (
        <div className="h-full">
            <Helmet>
                <title>Home - Voyaguer</title>
            </Helmet>
            <Banner></Banner>
            <SearchTours></SearchTours>
            <TravelAndTourism></TravelAndTourism>
            <TourType></TourType>
            <PopularDestinations></PopularDestinations>
            <PopularPackages></PopularPackages>
            <TouristsStory></TouristsStory>
            {!user && <SpecialOffer></SpecialOffer>}
        </div>
    );
};

export default Home;
