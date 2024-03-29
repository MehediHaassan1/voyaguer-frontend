import { useEffect, useState } from "react";
import usePrivateApi from "../../hooks/usePrivateApi";
import { useParams } from "react-router-dom";
import useBlogDetails from "../../hooks/useBlogDetails";

const BlogDetails = () => {
    // const [blogData, setBlogData] = useState(null);
    // const privateApi = usePrivateApi();
    const { blogId } = useParams();
    console.log(blogId);
    // useEffect(() => {
    //     async function fetchData() {
    //         const blogRes = await privateApi.get(
    //             `api/v1/blogs/${params.blogId}`
    //         );
    //         setBlogData(blogRes.data);
    //     }
    //     fetchData();
    // });
    // console.log(blogData);

    const { blog } = useBlogDetails(blogId);
    console.log(blog);

    return (
        <div className="py-16 max-w-screen-xl mx-auto text-white">
            <div className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative min-h-96">
                <div
                    className="absolute left-0 bottom-0 w-full h-full z-10"
                    style={{
                        backgroundImage:
                            "linear-gradient(180deg,transparent,rgba(0,0,0,.7)) ",
                    }}
                ></div>
                <img
                    src={blog?.blogPost.image}
                    className="absolute left-0 top-0 w-full h-full z-0 object-cover"
                />
                <div className="p-4 absolute bottom-0 left-0 z-20 bg-black/60 w-full">
                    <h2 className="text-3xl font-semibold text-gray-100 leading-tight">
                        {blog?.blogPost.title}
                    </h2>
                    <div className="flex mt-3">
                        <img
                            src={blog?.author.image}
                            className="h-10 w-10 rounded-full mr-2 object-cover"
                        />
                        <div>
                            <p className="font-semibold text-gray-200 text-sm">
                                {blog?.author.name}
                            </p>
                            <p className="font-semibold text-gray-400 text-xs">
                                {blog?.blogPost.date}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-4 lg:px-0 mt-12 text-gray-400 max-w-screen-md mx-auto text-lg leading-relaxed">
                <p className="pb-6">{blog?.blogPost.content}</p>

                <div className="flex items-center gap-4">
                    {blog?.blogPost.tags?.map((tag) => (
                        <p
                            key={tag}
                            className="py-1 px-3 border border-orange-500 rounded-full text-xs"
                        >
                            {tag}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;
