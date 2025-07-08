import { rest } from "msw";

export const handlers = [
    rest.get("https://finnhub.io/api/v1/news", (req, res, ctx) =>
        res(
            ctx.status(200),
            ctx.json([
                {
                    id: 777,
                    headline: "Mock Headline",
                    datetime: 1_720_000_000,
                    image: "https://placehold.it/300x200",
                    source: "MockSource",
                    url: "https://example.com",
                    category: "general",
                    related: "",
                    summary: "" 
                }
            ])
        )
    )
];
