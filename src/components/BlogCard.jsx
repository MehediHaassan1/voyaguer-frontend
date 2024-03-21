import { Link } from "react-router-dom";

const BlogCard = ({ data }) => {
    console.log(data);
    const { author, blogPost } = data;
    return (
        <div className="rounded-lg flex items-center gap-4 border border-slate-600 h-60">
            <div className="w-1/2 h-full">
                <img
                    src={blogPost?.image}
                    alt=""
                    className="h-full object-cover rounded-lg"
                />
            </div>
            <div className="w-1/2 text-white">
                <h2 className="text-xl font-semibold text-white">
                    {blogPost?.title}
                </h2>
                <div className="space-y-3 my-3">
                    <p className="text-base text-gray-400">
                        Written by{" "}
                        <Link className="link link-hover">{author?.name}</Link>
                    </p>
                    <p className="text-base text-gray-400">{blogPost?.date}</p>
                </div>
                <Link className="my-btn-hover">Read more</Link>
            </div>
        </div>
    );
};

export default BlogCard;
