import { Link, useLocation } from "react-router-dom";
import BlogCard from "../../../components/BlogCard";

const Blogs = () => {
    const blogData = [
        {
            author: {
                name: "Emma Smith",
                location: "New York, USA",
                image: "https://example.com/emmasmith.jpg",
            },
            blogPost: {
                title: "Exploring the Streets of Tokyo",
                date: "2024-03-10",
                image: "https://images.unsplash.com/photo-1501560379-05951a742668?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                content:
                    "Tokyo is a bustling metropolis filled with vibrant culture, delicious food, and stunning architecture. Join me as I wander through the streets of Shibuya, experience the serenity of the Meiji Shrine, and indulge in the city's famous ramen shops. Don't miss out on the breathtaking views from the Tokyo Skytree and the tranquil beauty of the cherry blossoms in spring.",
                tags: ["Tokyo", "Japan", "Travel"],
            },
        },
        {
            author: {
                name: "Carlos Martinez",
                location: "Barcelona, Spain",
                image: "https://example.com/carlosmartinez.jpg",
            },
            blogPost: {
                title: "A Taste of Spain: Exploring Barcelona's Culinary Scene",
                date: "2024-02-28",
                image: "https://images.unsplash.com/photo-1707343843437-caacff5cfa74?q=80&w=1375&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                content:
                    "Barcelona is a paradise for food lovers, with its bustling markets, tapas bars, and Michelin-starred restaurants. Join me as I sample traditional Catalan dishes, sip on sangria by the beach, and discover the secrets of Spanish cuisine. Explore the architectural wonders of Antoni Gaudí, from the iconic Sagrada Família to the whimsical Park Güell.",
                tags: ["Barcelona", "Spain", "Food", "Travel"],
            },
        },
        {
            author: {
                name: "Sophie Johnson",
                location: "London, UK",
                image: "https://example.com/sophiejohnson.jpg",
            },
            blogPost: {
                title: "A Weekend Getaway to Paris",
                date: "2024-01-15",
                image: "https://example.com/paris.jpg",
                content:
                    "Paris, the City of Light, never fails to enchant with its iconic landmarks, charming cafes, and romantic atmosphere. Join me as I wander along the Seine, admire the beauty of the Eiffel Tower, and indulge in delicious pastries at a quaint patisserie. Discover the art treasures of the Louvre and stroll through the picturesque streets of Montmartre.",
                tags: ["Paris", "France", "Travel"],
            },
        },
        {
            author: {
                name: "Mohammed Ali",
                location: "Dubai, UAE",
                image: "https://example.com/mohammedali.jpg",
            },
            blogPost: {
                title: "Discovering the Magic of Dubai",
                date: "2023-12-05",
                image: "https://example.com/dubai.jpg",
                content:
                    "Dubai is a city of contrasts, where futuristic skyscrapers stand alongside traditional souks and desert landscapes. Join me as I explore the dazzling sights of the Burj Khalifa, embark on a desert safari, and experience the vibrant nightlife of this dynamic city. Don't miss the chance to ski in the desert at Ski Dubai and take a sunset cruise along Dubai Marina.",
                tags: ["Dubai", "UAE", "Travel"],
            },
        },
        {
            author: {
                name: "Luisa Gomez",
                location: "Rio de Janeiro, Brazil",
                image: "https://example.com/luisagomez.jpg",
            },
            blogPost: {
                title: "Samba and Sunsets: A Guide to Rio de Janeiro",
                date: "2023-11-20",
                image: "https://example.com/rio.jpg",
                content:
                    "Rio de Janeiro is a city of passion, with its lively samba music, breathtaking beaches, and iconic landmarks. Join me as I soak up the sun on Copacabana Beach, hike to the top of Sugarloaf Mountain, and dance the night away in the streets of Lapa. Experience the thrill of Carnival and take in panoramic views from the iconic Christ the Redeemer statue.",
                tags: ["Rio de Janeiro", "Brazil", "Travel"],
            },
        },
    ];
    let homeBlogData;
    const { pathname } = useLocation();

    if (pathname === "/") {
        homeBlogData = blogData.slice(0, 2);
    }
    return (
        <div className="max-w-screen-xl mx-auto py-16">
            <div className="text-center text-white" data-aos="fade-up">
                <h1 className="text-3xl lg:text-5xl ont-bold ">Latest Blogs</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 mt-10">
                {pathname === "/"
                    ? homeBlogData?.map((data, index) => {
                          return (
                              <div
                                  key={data.blogPost.title}
                                  data-aos="fade-up"
                                  data-aos-delay={index * 100 + 50}
                              >
                                  <BlogCard data={data} />
                              </div>
                          );
                      })
                    : blogData?.map((data, index) => {
                          return (
                              <div
                                  data-aos="fade-up"
                                  data-aos-delay={index * 100 + 50}
                                  key={data.blogPost.title}
                              >
                                  <BlogCard data={data}></BlogCard>
                              </div>
                          );
                      })}
            </div>
            <div className="mt-10 text-center">
                {pathname === "/" && (
                    <Link
                        to="/blogs"
                        className="rounded py-2 px-4 bg-orange-700 text-white font-semibold"
                    >
                        See more
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Blogs;
