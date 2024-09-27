import { NewsResponse } from './types';

const API_KEY = '2abdbdf316d948bfa35f078faa67a3b7';
const BASE_URL = 'https://newsapi.org/v2';

// Función para obtener noticias generales (sin categoría)
export const getNews = async (): Promise<NewsResponse['articles']> => {
  const res = await fetch(`${BASE_URL}/top-headlines?country=us&apiKey=${API_KEY}`);
  const data: NewsResponse = await res.json();
  return data.articles;
};

// Función para obtener noticias por categoría
export const getNewsByCategory = async (category: string): Promise<NewsResponse['articles']> => {
  const res = await fetch(`${BASE_URL}/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`);
  const data: NewsResponse = await res.json();
  return data.articles;
};
