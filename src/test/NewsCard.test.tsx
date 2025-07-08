import { render, screen } from "@testing-library/react";
import NewsCard from "../app/_components/NewsCard";
import { NewsItem } from "@/types/news";

const mockNews: NewsItem = {
    id: 1,
    headline: "Mock Headline",
    datetime: 1_720_000_000,
    image: "https://placehold.it/300x200",
    source: "MockSource",
    url: "https://example.com",
    category: "general",
    related: "",
    summary: ""
};

describe("<NewsCard />", () => {
    it("displays headline, source and link", () => {
        render(<NewsCard item={mockNews} />);

        expect(screen.getByText("Mock Headline")).toBeInTheDocument();
        expect(screen.getByText((text) => text.includes("MockSource"))).toBeInTheDocument();
        expect(screen.getByRole("link")).toHaveAttribute("href", mockNews.url);
    });
});
