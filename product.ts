import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Elegant Red Kurti',
    category: 'kurti',
    price: 799,
    colors: ['red'],
    imageUrl: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    overlayUrl: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'A beautiful red kurti perfect for casual and semi-formal occasions.',
    tags: ['casual', 'embroidered', 'cotton']
  },
  {
    id: '2',
    name: 'Blue Floral Kurti',
    category: 'kurti',
    price: 1299,
    colors: ['blue'],
    imageUrl: 'https://images.pexels.com/photos/7389103/pexels-photo-7389103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    overlayUrl: 'https://images.pexels.com/photos/7389103/pexels-photo-7389103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Floral patterned blue kurti made from premium cotton.',
    tags: ['floral', 'premium', 'party']
  },
  {
    id: '3',
    name: 'Classic Running Sneakers',
    category: 'sneaker',
    price: 2499,
    colors: ['white', 'black'],
    imageUrl: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    overlayUrl: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Comfortable running sneakers with excellent support.',
    tags: ['running', 'comfortable', 'casual']
  },
  {
    id: '4',
    name: 'Urban Street Sneakers',
    category: 'sneaker',
    price: 1899,
    colors: ['red', 'black'],
    imageUrl: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    overlayUrl: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Stylish urban sneakers perfect for casual outings.',
    tags: ['street', 'party', 'stylish']
  },
  {
    id: '5',
    name: 'Modern Slim Frames',
    category: 'frames',
    price: 1499,
    colors: ['black'],
    imageUrl: 'https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    overlayUrl: 'https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Lightweight and durable frames with a modern design.',
    tags: ['lightweight', 'durable', 'modern']
  },
  {
    id: '6',
    name: 'Designer Aviator Frames',
    category: 'frames',
    price: 2999,
    colors: ['gold'],
    imageUrl: 'https://images.pexels.com/photos/1362558/pexels-photo-1362558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    overlayUrl: 'https://images.pexels.com/photos/1362558/pexels-photo-1362558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Premium aviator frames with gold-plated details.',
    tags: ['designer', 'premium', 'aviator']
  }
];

export const defaultModels = [
  {
    id: 'm1',
    name: 'Model 1',
    imageUrl: 'https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'kurti'
  },
  {
    id: 'm2',
    name: 'Model 2',
    imageUrl: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'frames'
  },
  {
    id: 'm3',
    name: 'Model 3',
    imageUrl: 'https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'sneaker'
  }
];