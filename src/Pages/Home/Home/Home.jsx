import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import SearchTours from "../SearchTours/SearchTours";
import TravelAndTourism from "../TravelAndTourism/TravelAndTourism";
import TourType from "../TourType/TourType";
import TouristsStory from "../TouristsStory/TouristsStory";

const Home = () => {
    return (
        <div className="h-full">
            <Helmet>
                <title>Home - Voyaguer</title>
            </Helmet>
            <Banner></Banner>
            <SearchTours></SearchTours>
            <TravelAndTourism></TravelAndTourism>
            <TourType></TourType>
            <TouristsStory></TouristsStory>
        </div>
    );
};

export default Home;
