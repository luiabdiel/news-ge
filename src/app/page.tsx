"use client"

import useNewsList from "@/hook/use-news-list";
import News from "./components/news";
import { format } from "date-fns"

export default function Home() {
  const { newsData } = useNewsList()

  return (
    <main>
       <div className="flex flex-col p-8 m-auto max-w-3xl p-">
        {newsData.map((news) => (
          <News
            key={news.title}
            title={news.title}
            description={news.description}
            image={news.image}
            publishedAt={format(new Date(news.publishedAt), "dd/MM/yyyy")}
            url={news.url}
            source={news.source.name}
          />
        ))}
       </div>
    </main>
  );
}
