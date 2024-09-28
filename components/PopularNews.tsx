// components/PopularNews.tsx
import { Article } from "@/lib/types";

interface PopularNewsProps {
  articles: Article[];
}

const PopularNews: React.FC<PopularNewsProps> = ({ articles }) => {
  return (
    <div className=" ">
      <h2 className="text-3xl font-bold mb-4">Popular News</h2>
      <hr className="border-t-2 border-gray-600 mb-6" />
      <div className="flex flex-col gap-4">
        {articles.map((article, index) => (
          <div key={index}>
            <h3 className="text-xl font-semibold mb-1">{article.title}</h3>
            <p className="text-gray-700">{article.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularNews;
