import { useQuery } from "@tanstack/react-query";
import usePublicApi from "./usePublicApi";

const useBlogs = () => {
    const publicApi = usePublicApi();

    const { data: blogs = [] } = useQuery({
        queryKey: ["blogs"],
        queryFn: async () => {
            const res = await publicApi.get("/api/v1/blogs");
            return res.data;
        },
    });

    return { blogs };
};

export default useBlogs;
