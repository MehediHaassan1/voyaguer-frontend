import ReactPlayer from "react-player";

const OverviewVideo = () => {
    return (
        <div className="h-[250px] md:h-[350px] lg:h-[450px]">
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

export default OverviewVideo;
