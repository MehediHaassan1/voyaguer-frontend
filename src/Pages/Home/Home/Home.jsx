import { Helmet } from "react-helmet-async";

const Home = () => {
    return (
        <div className="h-full">
            <Helmet>
                <title>Home - Voyaguer</title>
            </Helmet>
            <img
                className="maskImage h-screen object-cover w-full"
                src="https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
            />
        </div>
    );
};

export default Home;
