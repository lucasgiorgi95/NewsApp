"use client";
import { useState, useEffect } from 'react';
import { getNewsByCategory } from '../lib/news';
import { Article } from '../lib/types';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import PopularNews from '../components/PopularNews';

export default function Home() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [category, setCategory] = useState(''); 

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const news = await getNewsByCategory(category || 'general');
        setArticles(news);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, [category]);

  const popularArticles = articles.length > 6 ? articles.slice(0, 6) : [];

  return (
    <div className="container mx-auto">
      <Nav selectedCategory={category} onCategoryChange={setCategory} />
      
      {articles.length > 0 && <Hero articles={articles} />}
      {popularArticles.length > 0 && <PopularNews articles={popularArticles} />}
    </div>
  );
}
