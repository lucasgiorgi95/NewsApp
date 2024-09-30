"use client";
import { useEffect, useState, Suspense } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { getNewsByCategory } from "@/lib/news";
import { Article } from "@/lib/types";
import Nav from "@/components/Nav";

const CategoryNews = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      if (category) {
        try {
          setLoading(true);
          const news = await getNewsByCategory(category);
          setArticles(news);
        } catch (error) {
          console.error("Error fetching news:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchNews();
  }, [category]);

  return (
    <div className="font-times container mx-auto p-4">
      <Nav
        selectedCategory={category as string}
        onCategoryChange={(newCategory) =>
          router.push(`/CategoryNews?category=${newCategory}`)
        }
      />
      <h1 className="text-4xl font-bold mb-8 mt-6 text-center">
        {category
          ? category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()
          : ""}
      </h1>
      <hr className="border-t-2 border-gray-600 mb-6" />

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="loader">Cargando...</div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <div key={index} className="p-4">
              <img
                src={article.urlToImage || "/image/por-defecto.webp"}
                alt={article.title}
                className="w-full h-48 object-cover mb-4"
              />
              <h2 className="text-2xl font-semibold mb-2">{article.title}</h2>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                Read more
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Page = () => {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <CategoryNews />
    </Suspense>
  );
};

export default Page;
