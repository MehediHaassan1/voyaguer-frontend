import { Link, useLocation } from "react-router-dom";
import BlogCard from "../../../components/BlogCard";
import useBlogs from "../../../hooks/useBlogs";

const Blogs = () => {
    const { blogs } = useBlogs();

    let homeBlogData;
    const { pathname } = useLocation();

    if (pathname === "/") {
        homeBlogData = blogs?.slice(0, 2);
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
                    : blogs?.map((data, index) => {
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
                        className="my-btn-hover hover:bg-transparent duration-300 rounded py-2 px-4 bg-orange-700 text-white font-semibold"
                    >
                        See more
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Blogs;
