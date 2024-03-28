import { useQuery } from "@tanstack/react-query";
import usePrivateApi from "./usePrivateApi";

const useBlogDetails = (id) => {
    const privateApi = usePrivateApi();
    const { data: blog } = useQuery({
        queryKey: ["blog", id],
        queryFn: async () => {
            const res = await privateApi.get(`/api/v1/blogs/${id}`);
            return res.data;
        },
    });

    return { blog };
};

export default useBlogDetails;
