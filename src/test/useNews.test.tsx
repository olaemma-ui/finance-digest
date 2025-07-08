import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useGeneralNews } from "../hooks/useNews";

const wrapper = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider
        client={
            new QueryClient({
                defaultOptions: { queries: { retry: false } },
            })
        }
    >
        {children}
    </QueryClientProvider>
);

describe("useGeneralNews()", () => {
    it("returns news data on success", async () => {
        const { result } = renderHook(() => useGeneralNews(), { wrapper });

        // 👉 wait until query is successful
        await waitFor(() => expect(result.current.isSuccess).toBe(true));

        expect(result.current.data![0].headline).toBe("Mock Headline");
    });
});
