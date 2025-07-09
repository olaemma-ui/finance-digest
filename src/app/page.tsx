"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NewsItem } from "@/types/news";
import { useGeneralNews } from "@/hooks/useNews";
import NewsCard from "./_components/NewsCard";
import Image from "next/image";

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


  return (
    <main className="">
      <div className="flex justify-center items-center p-8 md:border-b-0 border-b border-b-[#0E0D13]">
        <Image src="/logo.svg" alt="logo" width={200} height={49} className="w-[120px] h-[30px]" />
      </div>
      <p className="md:px-8 px-4 text-white text-left text-[2em] font-bold mt-8">
        NEWS
      </p>
      {isLoading && <p className="md:p-8 p-4">Loading...</p>}
      {error && <p className="md:p-8 p-4">Something went wrong. Please try again later.</p>}

      <div className="md:p-8 grid grid-cols-1 sm:grid-cols-2- lg:grid-cols-4 gap-6">
        {data?.map((item: NewsItem) => (
          <NewsCard key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
}
