"use client"

import useNewsList from "@/hook/use-news-list";
import News from "./components/news";
import { format } from "date-fns"
import Container from "./components/container";

export default function Home() {
  const { newsData } = useNewsList()

  return (
    <main>
       <Container>
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
       </Container>
    </main>
  );
}
