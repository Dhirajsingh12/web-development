export interface Product {
    id: string;
    name: string;
    category: 'kurti' | 'sneaker' | 'frames';
    price: number;
    colors: string[];
    imageUrl: string;
    overlayUrl: string;
    description: string;
    tags: string[];
  }
  
  export interface SearchFilters {
    query: string;
    category?: 'kurti' | 'sneaker' | 'frames';
    color?: string;
    maxPrice?: number;
    minPrice?: number;
    tags?: string[];
  }
  
  export interface ImageOverlayPosition {
    x: number;
    y: number;
    scale: number;
    rotation: number;
  }
  
  export type RecognitionStatus = 'inactive' | 'listening' | 'processing' | 'error';