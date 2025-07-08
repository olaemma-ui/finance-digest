import { useQuery } from "@tanstack/react-query";
import { getGeneralNews } from "../services/newsService";

export function useGeneralNews() {
    return useQuery({
        queryKey: ["general-news"],
        queryFn: getGeneralNews,
        staleTime: 1000 * 60 * 5, // 5 mins
    });
}
