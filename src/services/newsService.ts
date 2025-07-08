

import axios from "@/lib/axios";
import { NewsItem } from "../types/news";

export async function getGeneralNews(): Promise<NewsItem[]> {
    const response = await axios.get<NewsItem[]>("/news", {
        params: {
            category: "general",
        },
    });
    return response.data;
}
