export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'coffee' | 'tea' | 'pastry';
  featured: boolean;
  details: {
    origin?: string;
    roastLevel?: string;
    flavorNotes: string[];
    preparation?: string;
  };
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Cappuccino',
    description: 'Light roasted single-origin coffee with floral and citrus notes',
    price: 18.99,
    image: 'https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRWm9qKkP2EkvSnBuwhWD7T8-oRTUNKZFq13dgEowlcT4Kqymc2bv4b0ZzJXv0aT4wR',
    category: 'coffee',
    featured: true,
    details: {
      origin: 'Yirgacheffe, Ethiopia',
      roastLevel: 'Light',
      flavorNotes: ['Jasmine', 'Bergamot', 'Lemon'],
      preparation: 'Best served as pour-over or drip coffee'
    }
  },
  {
    id: '2',
    name: 'Latte',
    description: 'Medium roasted coffee with caramel and nutty undertones',
    price: 16.99,
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Caffe_Latte_at_Pulse_Cafe.jpg',
    category: 'coffee',
    featured: true,
    details: {
      origin: 'Huila, Colombia',
      roastLevel: 'Medium',
      flavorNotes: ['Caramel', 'Walnut', 'Brown Sugar'],
      preparation: 'Versatile - great for espresso or filter coffee'
    }
  },
  {
    id: '3',
    name: 'Caffè macchiato',
    description: 'Bold and full-bodied dark roast with earthy notes',
    price: 17.99,
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Caff%C3%A8_macchiato.jpg',
    category: 'coffee',
    featured: false,
    details: {
      origin: 'Sumatra, Indonesia',
      roastLevel: 'Dark',
      flavorNotes: ['Dark Chocolate', 'Cedar', 'Spice'],
      preparation: 'Perfect for french press or cold brew'
    }
  },
  {
    id: '4',
    name: 'Choux pastry',
    description: 'Buttery layered croissant filled with almond cream',
    price: 4.99,
    image: 'https://sallysbakingaddiction.com/wp-content/uploads/2018/08/homemade-cream-puffs.jpg',
    category: 'pastry',
    featured: true,
    details: {
      flavorNotes: ['Almond', 'Butter', 'Vanilla']
    }
  },
  {
    id: '5',
    name: 'Pu-reh tea',
    description: 'Buttery layered croissant filled with almond cream',
    price: 40.99,
    image: 'https://uploads-ssl.webflow.com/5d8a366133b3d4f879cbd418/5dbdecfa15cb7f6482a177d4_5b9fc9f0475d3e7b604a0912_rooibos-2675473_1280.jpeg',
    category: 'tea',
    featured: true,
    details: {
      flavorNotes: ['Almond', 'Butter', 'Vanilla']
    }
  },
  {
    id: '6',
    name: 'Iced coffee',
    description: 'Buttery layered croissant filled with almond cream',
    price: 40.99,
    image: 'https://www.allrecipes.com/thmb/Hqro0FNdnDEwDjrEoxhMfKdWfOY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/21667-easy-iced-coffee-ddmfs-4x3-0093-7becf3932bd64ed7b594d46c02d0889f.jpg',
    category: 'coffee',
    featured: true,
    details: {
      flavorNotes: ['Almond', 'Butter', 'Vanilla']
    }
  },
  {
    id: '7',
    name: 'Irish coffee',
    description: 'Buttery layered croissant filled with almond cream',
    price: 40.99,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Irish_coffee_glass.jpg/1200px-Irish_coffee_glass.jpg',
    category: 'coffee',
    featured: true,
    details: {
      flavorNotes: ['Almond', 'Butter', 'Vanilla']
    }
  },
  {
    id: '8',
    name: 'Black tea',
    description: 'Buttery layered croissant filled with almond cream',
    price: 33.99,
    image: 'https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcTnzNucB4vS1nfwi_DQKD9ngkYeMrMsLkBEF1QVpTi2beSBv-Ze6zzekbZU4QUZjxug',
    category: 'tea',
    featured: true,
    details: {
      flavorNotes: ['Almond', 'Butter', 'Vanilla']
    }
  },
  {
    id: '9',
    name: 'Herbal tea',
    description: 'Buttery layered croissant filled with almond cream',
    price: 15.99,
    image: 'https://brodandtaylor.com/cdn/shop/articles/dehydrated-tea-thumb_1024x.jpg?v=1639765759',
    category: 'tea',
    featured: true,
    details: {
      flavorNotes: ['Almond', 'Butter', 'Vanilla']
    }
  },
  {
    id: '10',
    name: 'Affogato',
    description: 'Buttery layered croissant filled with almond cream',
    price: 12.99,
    image: 'https://natashaskitchen.com/wp-content/uploads/2019/08/Affogato-Coffee-Dessert-8.jpg',
    category: 'coffee',
    featured: true,
    details: {
      flavorNotes: ['Almond', 'Butter', 'Vanilla']
    }
  },
  {
    id: '11',
    name: 'Filo pastry',
    description: 'Buttery layered croissant filled with almond cream',
    price: 4.99,
    image: 'http://t2.gstatic.com/images?q=tbn:ANd9GcSBo4isJ5UYUl4163IfDSlxPi4WZzWnqiLdnBcLnPom2WiM-pNb',
    category: 'pastry',
    featured: true,
    details: {
      flavorNotes: ['Almond', 'Butter', 'Vanilla']
    }
  },
  {
    id: '12',
    name: 'Drip coffee',
    description: 'Buttery layered croissant filled with almond cream',
    price: 10.99,
    image: 'https://coffeebros.com/cdn/shop/articles/what-is-drip-coffee.jpg?v=1705698791',
    category: 'coffee',
    featured: true,
    details: {
      flavorNotes: ['Almond', 'Butter', 'Vanilla']
    }
  },
  {
    id: '13',
    name: 'Hot water crust pastry',
    description: 'Buttery layered croissant filled with almond cream',
    price: 5.99,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Melton_Mowbray_Pork_Pie.png/800px-Melton_Mowbray_Pork_Pie.png',
    category: 'pastry',
    featured: true,
    details: {
      flavorNotes: ['Almond', 'Butter', 'Vanilla']
    }
  }
];