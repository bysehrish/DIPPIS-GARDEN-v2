import { Product } from '../types';
import imgMayoGarlic from '../assets/images/mayo_garlic_sauce_1784535943060.jpg';
import imgSoyaSauce from '../assets/images/soya_sauce_1784535961219.jpg';
import imgChiliGarlic from '../assets/images/chili_garlic_sauce_1784535922061.jpg';
import imgMustard from '../assets/images/yellow_mustard_sauce_1784536197073.jpg';
import imgBurgerSauce from '../assets/images/burger_sauce_1784536217195.jpg';
import imgKetchup from '../assets/images/tomato_ketchup_1784536231627.jpg';
import imgKetchup1kg from '../assets/images/ketchup_1kg_pouch_fixed_1784633093148.jpg';
import imgMayo5kg from '../assets/images/mayo_pouch_5kg_1784632546659.jpg';
import imgChiliGarlic1kg from '../assets/images/chili_garlic_1kg_pouch_fixed_1784633114680.jpg';

export const products: Product[] = [
  {
    id: 'chili-garlic',
    name: 'Chili Garlic Sauce',
    description: 'Bold, spicy, and zesty. The perfect kick for any meal.',
    price: 4.99,
    image: imgChiliGarlic,
    category: 'Spicy'
  },
  {
    id: 'mayo-garlic',
    name: 'Mayo Garlic',
    description: 'Rich, creamy, and smooth. Adds a luscious garlic flavor.',
    price: 5.49,
    image: imgMayoGarlic,
    category: 'Creamy'
  },
  {
    id: 'soya-sauce',
    name: 'Soya Sauce',
    description: 'Authentic rich umami flavor for all your culinary needs.',
    price: 3.99,
    image: imgSoyaSauce,
    category: 'Savory'
  },
  {
    id: 'tangy-mustard',
    name: 'Tangy Mustard Sauce',
    description: 'Creamy, tangy, and bold. Elevate your sandwiches and hot dogs.',
    price: 4.49,
    image: imgMustard,
    category: 'Tangy'
  },
  {
    id: 'smoky-burger',
    name: 'Smoky Burger Sauce',
    description: 'Rich, creamy, and smoky. The ultimate burger companion.',
    price: 5.99,
    image: imgBurgerSauce,
    category: 'Creamy'
  },
  {
    id: 'tomato-ketchup',
    name: 'Tomato Ketchup',
    description: 'Thick, rich, and classic. Made from real garden-fresh tomatoes.',
    price: 3.49,
    image: imgKetchup,
    category: 'Classic'
  },
  {
    id: 'wholesale-ketchup-1kg',
    name: 'Tomato Ketchup - 1kg Pouch',
    description: 'Our classic ketchup in a convenient 1kg wholesale pouch for restaurants and large families.',
    price: 12.99,
    image: imgKetchup1kg,
    category: 'Wholesale'
  },
  {
    id: 'wholesale-mayo-5kg',
    name: 'Mayo Garlic - 5kg Bulk',
    description: 'Premium mayo garlic sauce in a massive 5kg bulk pouch. Perfect for catering and commercial use.',
    price: 45.99,
    image: imgMayo5kg,
    category: 'Wholesale'
  },
  {
    id: 'wholesale-chili-garlic-1kg',
    name: 'Chili Garlic Sauce - 1kg Pouch',
    description: 'Spice up your commercial kitchen with our 1kg wholesale chili garlic pouch.',
    price: 15.99,
    image: imgChiliGarlic1kg,
    category: 'Wholesale'
  }
];
