"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NewsItem } from "@/types/news";
import { useGeneralNews } from "@/hooks/useNews";
import NewsCard from "./_components/NewsCard";

const queryClient = new QueryClient();

export default function HomePage() {
  return (
    <QueryClientProvider client={queryClient}>
      <News />
    </QueryClientProvider>
  );
}

function News() {
  
  const { data, isLoading, error } = useGeneralNews();

  if (isLoading) return <p className="p-4">Loading...</p>;
  if (error) return <p className="p-4 text-red-600">Failed to load news. Try again.</p>;

  return (
    <main className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {data?.map((item : NewsItem) => (
        <NewsCard key={item.id} item={item} />
      ))}
    </main>
  );
}
