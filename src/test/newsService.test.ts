import axios from "@/lib/axios";
import { getGeneralNews } from "../services/newsService";

jest.mock("@/lib/axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("getGeneralNews()", () => {
    it("fetches from /news with category=general", async () => {
        mockedAxios.get.mockResolvedValueOnce({ data: [{ id: 1 }] });

        await getGeneralNews();

        expect(mockedAxios.get).toHaveBeenCalledWith("/news", {
            params: { category: "general" }
        });
    });

    it("throws error when request fails", async () => {
        mockedAxios.get.mockRejectedValueOnce(new Error("Network"));

        await expect(getGeneralNews()).rejects.toThrow("Network");
    });
});
