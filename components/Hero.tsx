// components/Hero.tsx
'use client';

import { useEffect, useState } from "react"; // Importar hooks de React
import { Article } from "@/lib/types"; 
import PopularNews from "./PopularNews";

interface BreakingNewsProps {
  articles: Article[]; // Este podría ser opcional si los artículos se obtienen de otra fuente
}

export default function Hero({ articles }: BreakingNewsProps) {
  const [loading, setLoading] = useState(true); // Estado para controlar la carga

  useEffect(() => {
    if (articles && articles.length >= 10) {
      setLoading(false); // Cambiar a false cuando los artículos estén disponibles
    }
  }, [articles]); // Ejecutar el efecto cuando los artículos cambien

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="loader">Cargando...</div> {/* Puedes reemplazar esto con un spinner o animación */}
      </div>
    ); 
  }

  if (!articles || articles.length < 10) {
    return null; 
  }

  const mainArticle = articles[0];
  const secondaryArticles = articles.slice(1, 4); // Tres artículos sin imagen
  const randomArticles = articles.slice(4, 10); // Seis artículos aleatorios

  return (
    <div className="container my-8 mr-[100rem] flex flex-col md:flex-row">
      <div className="md:w-2/3 mx-auto"> 
        {/* Título Principal */}
        <h2 className="text-3xl text-center font-bold mb-4">Breaking News</h2>
        <hr className="border-t-2 border-gray-300 mb-6" />
        
        {/* Artículo Principal */}
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
            Leer más
          </a>
        </div>

        {/* Tres Artículos Secundarios en Columna */}
        <div className="flex flex-col gap-4 mb-6">
          {secondaryArticles.map((article, index) => (
            <div key={index} className="p-4">
              <h3 className="text-lg font-semibold mb-1">{article.title}</h3>
              <p className="text-gray-700 mb-1">{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                Leer más
              </a>
            </div>
          ))}
        </div>

        {/* Línea Divisoria */}
        <hr className="border-t-2 border-gray-300 mb-6" />

        {/* Seis Noticias Aleatorias */}
        <h2 className="text-2xl font-bold mb-4">Más Noticias</h2>
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
                Leer más
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Componente Sidebar de Noticias Populares */}
      <div className="w-full md:w-1/3 lg:w-1/4 mt-10 md:mt-0">
        <PopularNews articles={articles.slice(10)} />
      </div>
    </div>
  );
}