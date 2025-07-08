import { NewsItem } from "@/types/news";
import { formatDate } from "@/utils/formdata";


export default function NewsCard({ item }: { item: NewsItem }) {
    return (
        <a href={item.url} target="_blank" rel="noopener noreferrer">
            <div className="border rounded-lg overflow-hidden hover:shadow-md transition bg-white">
                <img src={item.image} alt={item.headline} className="w-full h-48 object-cover" />
                <div className="p-4">
                    <div className="text-sm text-gray-500">{item.source} • {formatDate(item.datetime)}</div>
                    <h2 className="mt-1 font-semibold text-lg text-gray-800">{item.headline}</h2>
                </div>
            </div>
        </a>
    );
}
