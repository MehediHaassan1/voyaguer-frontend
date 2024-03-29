import ReactPlayer from "react-player";

const Overview = () => {
    return (
        <div
            className="max-w-screen-xl mx-auto h-[250px] md:h-[350px] lg:h-[450px] rounded overflow-hidden"
            data-aos="fade-up"
        >
            <ReactPlayer
                muted={true}
                autoPlay={true}
                controls={true}
                width="100%"
                height="100%"
                url="https://youtu.be/PsUqHSsf-F4?si=qcC3vM5cVEqz-TGZ"
            />
        </div>
    );
};

export default Overview;
