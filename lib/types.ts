// lib/types.ts

export interface Article {
    source: {
      id: string | null;
      name: string;
    };
    author: string | null;
    title: string;
    description: string | null;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
    content: string | null;
  }
  
  export interface NewsResponse {
    status: string;
    totalResults: number;
    articles: Article[];
  }
  

  export interface NavbarProps {
    selectedCategory: string;
    onCategoryChange: (category: string) => void;
  }

 export interface NavProps {
    selectedCategory: string;
    onCategoryChange: (category: string) => void;
  }