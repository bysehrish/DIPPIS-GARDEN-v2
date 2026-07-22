import burgerImg from '../assets/images/gourmet_burger_recipe_1784634587627.jpg';
import chickenImg from '../assets/images/fried_chicken_recipe_1784634612449.jpg';
import pastaImg from '../assets/images/spicy_pasta_recipe_1784634632792.jpg';

export interface Recipe {
  id: string;
  title: string;
  description: string;
  prepTime: string;
  image: string;
  sauceUsed: string;
}

export const recipes: Recipe[] = [
  {
    id: 'gourmet-burger',
    title: 'Gourmet Beef Burger',
    description: 'A towering classic beef burger elevated to gourmet status with a generous spread of our signature creamy Mayo Garlic and rich Tomato Ketchup. Perfect for weekend gatherings.',
    prepTime: '25 Min',
    image: burgerImg,
    sauceUsed: 'Mayo Garlic & Tomato Ketchup',
  },
  {
    id: 'crispy-fried-chicken',
    title: 'Golden Fried Chicken',
    description: 'Crispy on the outside, juicy on the inside. Pair these golden fried chicken pieces with our velvety Mayo Garlic dip for an unforgettable flavor combination.',
    prepTime: '40 Min',
    image: chickenImg,
    sauceUsed: 'Mayo Garlic',
  },
  {
    id: 'spicy-garlic-pasta',
    title: 'Spicy Tomato Garlic Pasta',
    description: 'A quick and vibrant pasta dish featuring fresh herbs and a spicy kick from our robust Chili Garlic sauce. A perfect weeknight dinner with a fiery twist.',
    prepTime: '20 Min',
    image: pastaImg,
    sauceUsed: 'Chili Garlic Sauce',
  }
];
