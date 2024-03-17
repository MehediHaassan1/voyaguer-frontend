import { FaCalendar } from "react-icons/fa6";
import { Link } from "react-router-dom";

const TouristsStory = () => {
    const data = [
        {
            date: "July 12, 2023",
            title: "Lost Treasures of the Inca Empire",
            subtitle: "Uncovering Mysteries in Machu Picchu",
            _id: "#PERU001",
            image: "https://images.unsplash.com/photo-1519761112046-3abcd5a21728?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            story: {
                summary: "Sarah's adventurous journey to explore Machu Picchu",
                content:
                    "Sarah, an adventurous traveler, embarked on a journey with our agency to explore the ancient ruins of Machu Picchu in Peru. With her knowledgeable guide, she delved into the history of the Inca Empire, marveling at the architectural wonders nestled high in the Andes Mountains. Together, they hiked along the Inca Trail, capturing breathtaking views of the surrounding landscape. Sarah's experience was nothing short of magical as she uncovered the mysteries of this UNESCO World Heritage Site.",
            },
        },
        {
            date: "September 5, 2023",
            title: "Wild Encounters on the Serengeti",
            subtitle: "A Journey Through Tanzania's Wildlife",
            _id: "#TANZANIA002",
            image: "https://images.unsplash.com/photo-1707410436272-1bcc71ecafb3?q=80&w=1572&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            story: {
                summary: "Mark's family safari adventure in Tanzania",
                content:
                    "Mark and his family embarked on an unforgettable safari adventure with our agency in Tanzania. From the comfort of their safari vehicle, they witnessed the annual Great Migration, marveling at the sight of thousands of wildebeest thundering across the Serengeti Plains. With the help of their experienced guide, they spotted lions, elephants, and giraffes in their natural habitat. Mark's children were thrilled to see such diverse wildlife up close, creating memories that would last a lifetime.",
            },
        },
        {
            date: "April 20, 2023",
            title: "Discovering Japan's Rich Heritage",
            subtitle: "Experiencing Tradition in Kyoto",
            _id: "#JAPAN003",
            image: "https://plus.unsplash.com/premium_photo-1690749740737-d06b2656b070?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            story: {
                summary: "Emily's cultural immersion tour in Kyoto",
                content:
                    "Emily, a history enthusiast, joined our agency for a cultural immersion tour in Japan. In the historic city of Kyoto, she wandered through traditional tea houses and serene Zen gardens, captivated by the beauty of cherry blossoms in full bloom. Guided by a local expert, Emily participated in a traditional tea ceremony and tried her hand at origami, gaining insight into Japan's rich heritage. As the sun set over Kyoto's ancient temples, Emily reflected on the profound impact of her journey.",
            },
        },
        {
            date: "June 8, 2023",
            title: "Jungle Expedition: Into the Heart of the Amazon",
            subtitle: "Navigating the Wonders of the Rainforest",
            _id: "#AMAZON004",
            image: "https://plus.unsplash.com/premium_photo-1661963759614-b92e01a9049e?q=80&w=1477&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            story: {
                summary:
                    "Carlos' eco-tourism adventure in the Amazon Rainforest",
                content:
                    "Carlos, an eco-conscious traveler, embarked on an eco-tourism adventure with our agency deep into the Amazon Rainforest. With a knowledgeable guide, he trekked through lush jungle trails, encountering vibrant wildlife and learning about the importance of conservation efforts in the region. From spotting colorful macaws to listening to the symphony of nocturnal creatures, every moment in the Amazon was filled with wonder. Carlos left with a newfound appreciation for the biodiversity of the rainforest and a commitment to protecting it for future generations.",
            },
        },
    ];

    return (
        <div className="max-w-screen-xl mx-auto mt-16">
            <div className="text-center" data-aos="fade-up">
                <span className="text-3xl lg:text-5xl border-l-4 border-orange-700 pl-5 text-white abril-fatface-regular tracking-widest">
                    Tourists Story
                </span>
            </div>
            <div className="mt-16 text-white space-y-20">
                {data.map((story, idx) => (
                    <div
                        key={story._id}
                        className={`flex flex-col md:flex-row md:even:flex-row-reverse items-center relative even:static`}
                        data-aos="fade-up"
                        data-aos-delay={idx * 200 + 100}
                    >
                        <div className="w-full md:w-3/5">
                            <img
                                src={story.image}
                                alt={story.title}
                                className="rounded"
                            />
                        </div>
                        <div
                            className={`w-full md:w-3/5 bg-gray-700 rounded bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 md:absolute p-6 space-y-3 md:space-y-2 lg:space-y-6 ${
                                idx % 2 === 0 ? "md:right-0" : "md:left-0"
                            }`}
                        >
                            <p className="text-lg text-orange-700 flex items-center gap-4 font-semibold">
                                {" "}
                                <FaCalendar /> {story.date}
                            </p>
                            <h1 className=" text-xl lg:text-3xl">
                                {story.title}
                            </h1>
                            <h3 className="font-mono">{story.subtitle}</h3>
                            <p>
                                <Link>Read more</Link>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TouristsStory;
