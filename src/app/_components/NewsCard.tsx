import { NewsItem } from "@/types/news";
import { formatDate } from "@/utils/formdata";


export default function NewsCard({ item }: { item: NewsItem }) {
    return (
        <a href={item.url} target="_blank" rel="noopener noreferrer">
            <div className="overflow-hidden flex md:flex-col flex-row items-center gap-[1em] hover:shadow-md transition hover:bg-[#2A283E] p-[1em] transition-all duration-300">
                <img src={item.image} alt={item.headline} className="md:w-full md:h-full md:object-cover w-[100px] h-[100px]" />
                <div className="">
                    <div className="text-sm text-white/70 flex justify-between"><span>{item.source}</span> <span>{formatDate(item.datetime)}</span></div>
                    <h2 className="mt-1 font-semibold text-lg text-white">{item.headline}</h2>
                </div>
            </div>
        </a>
    );
}
