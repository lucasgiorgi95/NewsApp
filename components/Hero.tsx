'use client';
import { useEffect, useState } from "react";
import { Article } from "@/lib/types";
import PopularNews from "./PopularNews";

interface BreakingNewsProps {
  articles: Article[];
}

export default function Hero({ articles }: BreakingNewsProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (articles && articles.length >= 10) {
      setLoading(false);
    }
  }, [articles]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="loader">Cargando...</div>
      </div>
    );
  }

  if (!articles || articles.length < 10) {
    return null;
  }

  const mainArticle = articles[0];
  const secondaryArticles = articles.slice(1, 4);
  const randomArticles = articles.slice(4, 10);

  return (
    <div className="font-times my-8 flex flex-col md:flex-row pr-[1rem] px-4">
      <div className="md:w-[67%] mx-auto">
        <h2 className="text-3xl text-center font-bold mb-4">Breaking News</h2>
        <hr className="border-t-2 border-gray-600 mb-6" />
        
        <div className="mb-6">
          {mainArticle.urlToImage && (
            <img
              src={mainArticle.urlToImage}
              alt={mainArticle.title}
              className="w-full h-70 object-cover rounded-md mb-3"
            />
          )}
          <h3 className="text-xl font-semibold mb-2">{mainArticle.title}</h3>
          <a href={mainArticle.url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
            Read more
          </a>
        </div>

        <div className="flex flex-col gap-4 mb-6">
          {secondaryArticles.map((article, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-1">{article.title}</h3>
              <p className="text-gray-700 mb-1">{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                Read more
              </a>
            </div>
          ))}
        </div>

        <hr className="border-t-2 border-gray-600 mb-6" />

        <h2 className="text-2xl font-bold mb-4">More News</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {randomArticles.map((article, index) => (
            <div key={index} className="p-4">
              {article.urlToImage && (
                <img
                  src={article.urlToImage}
                  alt={article.title}
                  className="w-full h-32 object-cover rounded-md mb-2"
                />
              )}
              <h3 className="text-base font-semibold mb-1">{article.title}</h3>
              <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                Read more
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full md:w-1/3 lg:w-[27%] mt-10 md:mt-0 px-4">
        <PopularNews articles={articles.slice(12)} />
      </div>
    </div>
  );
}
