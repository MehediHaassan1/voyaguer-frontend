
import { Link } from "react-router-dom";
import PackageCard from "../../../components/PackageCard";

const PopularPackages = () => {
    const packageData = [
        {
            _id: 1,
            tripName: "Cox's Bazar",
            location: "Cox’s Bazar",
            image: "https://images.unsplash.com/photo-1619177383949-f03975e50b19?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            price: 300,
            duration: "3 days",
            description: `Explore the picturesque town of Cox's Bazar and its neighboring islands on this two-day tour`,
            review: 4.1,
            reviewCount: 12,
        },
        {
            _id: 2,
            tripName: "Cox's Bazar",
            location: "Cox’s Bazar",
            image: "https://images.unsplash.com/photo-1619177383949-f03975e50b19?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            price: 250,
            duration: "2 days",
            description: `Explore the picturesque town of Cox's Bazar and its neighboring islands on this two-day tour`,
            review: 4.5,
            reviewCount: 17,
        },
        {
            _id: 3,
            tripName: "Cox's Bazar",
            location: "Cox’s Bazar",
            image: "https://images.unsplash.com/photo-1619177383949-f03975e50b19?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            price: 450,
            duration: "6 days",
            description: `Explore the picturesque town of Cox's Bazar and its neighboring islands on this two-day tour`,
            review: 4,
            reviewCount: 21,
        },
    ];
    return (
        <div className="max-w-screen-xl mx-auto mt-16">
            <div className="text-center text-white" data-aos="fade-up">
                <h1 className="text-3xl lg:text-5xl ont-bold ">
                    Best value trips
                </h1>
                <p className="font-mono md:text-xl mt-4">
                    Best offers trips from us
                </p>
            </div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-10">
                {packageData.map((data, index) => (
                    <div
                        key={index}
                        className="text-white group hover:cursor-pointer shadow-2xl"
                    >
                        <div data-aos="fade-up" data-aos-delay={index * 100}>
                            <PackageCard data={data}></PackageCard>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-10">
                <Link className="my-btn-hover text-white py-1 px-3 bg-orange-700 hover:bg-transparent  duration-300 font-bold tracking-wide rounded">
                    {" "}
                    See more
                </Link>
            </div>
        </div>
    );
};

export default PopularPackages;
