import { NewsData } from "@/Interface/news"
import { useCallback, useEffect, useState } from "react"
import { API_KEI, API_URL } from "../constants/environment"
import axios from "axios"

const URL_API = `${API_URL}top-headlines?category=technology&lang=pt&country=br&max=10&apikey=${API_KEI}`

export default function useNewsList() {
  const [newsData, setNewsData] = useState<NewsData[]>([])

  const getNews = useCallback(async () => {
    const response = await axios.get(URL_API)

    setNewsData(response.data.articles)
  }, [])

  useEffect(() => {
    getNews()
  }, [getNews])

  return {
    newsData
  }
}