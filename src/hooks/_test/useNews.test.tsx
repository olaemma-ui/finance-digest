import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useGeneralNews } from "../useNews";

const wrapper = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider
        client={new QueryClient({ defaultOptions: { queries: { retry: false } } })}
    >
        {children}
    </QueryClientProvider>
);

describe("useGeneralNews()", () => {
    it("returns news data on success", async () => {
        const { result } = renderHook(() => useGeneralNews(), { wrapper });

        await waitFor(() => expect(result.current.data).toBeDefined());
        expect(result.current.data![0].headline).toBe("Mock Headline");
    });

    it("sets isError on failure", async () => {
        const { server } = require("@/test/msw/server");
        const { rest } = require("msw");

        server.use(
            rest.get("https://finnhub.io/api/v1/news", (_: any, res: (arg0: any) => any, ctx: { status: (arg0: number) => any; }) =>
                res(ctx.status(500))
            )
        );

        const { result } = renderHook(() => useGeneralNews(), { wrapper });
        await waitFor(() => expect(result.current.isError).toBe(true));
    });
});
