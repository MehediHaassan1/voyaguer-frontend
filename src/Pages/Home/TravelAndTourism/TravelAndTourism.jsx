import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import OverviewVideo from "../../../components/OverviewVideo";
import Packages from "../../../components/Packages";
import Guides from "../../../components/Guides";

const TravelAndTourism = () => {
    return (
        <div className="max-w-screen-xl mx-auto" data-aos="fade-up">
            <Tabs>
                <TabList className="text-center text-white mb-5 md:space-x-4 lg:space-x-8">
                    <Tab>Overview</Tab>
                    <Tab>Packages</Tab>
                    <Tab>Guides</Tab>
                </TabList>

                <TabPanel>
                    <OverviewVideo></OverviewVideo>
                </TabPanel>
                <TabPanel>
                    <Packages></Packages>
                </TabPanel>
                <TabPanel>
                    <Guides></Guides>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default TravelAndTourism;
