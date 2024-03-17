import Package from "../../../components/Package";

const PopularDestinations = () => {
    const data = [
        {
            _id: 1,
            cityName: "Cox's Bazar",
            image: "https://images.unsplash.com/photo-1619177383949-f03975e50b19?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            _id: 2,
            cityName: "Rangamati",
            image: "https://images.unsplash.com/photo-1576419326170-74f6f9451993?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            _id: 3,
            cityName: "Saint Martin's",
            image: "https://images.unsplash.com/photo-1705941067487-b2dc067bc26c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            _id: 4,
            cityName: "Sylhet",
            image: "https://images.unsplash.com/photo-1627893528424-792f89b0f2d5?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
    ];
    return (
        <div className="max-w-screen-xl mx-auto mt-16">
            <div className="text-center text-white">
                <h1 className="text-3xl lg:text-5xl ont-bold ">
                    Popular Destinations
                </h1>
                <p className="font-mono md:text-xl mt-4">
                    Best tourist destinations
                </p>
            </div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
                {data.map((destination, index) => (
                    <div
                        key={index}
                        className="relative rounded overflow-hidden transition-transform hover:-translate-y-4 ease-in-out duration-300 hover:cursor-pointer"
                    >
                        <div
                            data-aos="fade-up"
                            data-aos-delay={index * 100 + 50}
                        >
                            <img
                                src={destination.image}
                                alt={destination.cityName}
                                className="h-56"
                            />
                            <h1 className="absolute bottom-0 text-3xl text-white pl-4 pb-4">
                                {destination.cityName}
                            </h1>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopularDestinations;
