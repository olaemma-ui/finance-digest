import { rest } from "msw";

/**
 *  Handle ANY host + ANY query string that ends with “/news”.
 *  Examples that will be matched automatically:
 *    • http://localhost/news?category=general
 *    • https://finnhub.io/api/v1/news?category=general&token=xxx
 */
export const handlers = [
    rest.get(/\/news$/, (_req, res, ctx) => {

        console.log("🔥 MSW caught request to:", _req.url.href);

        return res(
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
    }
    )
];
