export const product_list = [
  {
    id: 0,
    title: 'BAGUETTE FIN',
    weight: 250,
    quantityLeft: 4,
    price: 9.95,
    img: '0.jpeg',
    quantity: 0,
    categories: ['Deary', 'Chocolate'],
    shops: ['Spar Snaroya'],
  },
  {
    id: 1,
    title: 'HVIT SAUS',
    weight: 40,
    quantityLeft: 8,
    price: 7.45,
    img: '1.jpeg',
    quantity: 0,
    categories: ['Deary'],
    shops: ['Klass', 'Joker Stabekk'],
  },
  {
    id: 3,
    title: 'SVINESTEK',
    weight: 580,
    quantityLeft: 2,
    price: 49.95,
    img: '2.jpeg',
    quantity: 0,
    categories: ['Grains'],
    shops: ['Atb'],
  },
  {
    id: 4,
    title: 'BROWNIES',
    weight: 140,
    quantityLeft: 1,
    price: 15.45,
    img: '3.jpeg',
    quantity: 0,
    categories: ['Bread'],
    shops: ['Joker Stabekk'],
  },
];

export const blog_list = [
  {
    id: 0,
    image: require('./assets/images/1.jpeg'),
    title: 'Moussaka - with leftover lamb thigh',
    time: '2 hour ago',
  },
  {
    id: 1,
    image: require('./assets/images/2.jpg'),
    title: 'What can you make with overripe bananas?',
    time: '1 week ago',
  },
  {
    id: 2,
    image: require('./assets/images/3.jpeg'),
    title: 'Food waste in the grocery industry',
    time: '3 week ago',
  },
  {
    id: 3,
    image: require('./assets/images/0.jpeg'),
    title: 'Spar and Joker will fight against food waste',
    time: '2 mounth ago',
  },
];

export const categories_list = [
  { id: 0, name: 'Deary' },
  { id: 1, name: 'Bread' },
  { id: 2, name: 'Grains' },
  { id: 3, name: 'Chocolate' },
];
export const shops_list = [
  { id: 0, name: 'Atb' },
  { id: 1, name: 'Klass' },
  { id: 2, name: 'Spar Snaroya' },
  { id: 3, name: 'Joker Stabekk' },
];
