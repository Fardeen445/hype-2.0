/* ===== HVPE: EDIT THIS FILE to change products, prices, colours, store info ===== */
const STORE = {
  email: 'hello@hvpe.mu', phone: '+230 5000 0000',
  tiktok: 'https://www.tiktok.com/@hvpe_', instagram: 'https://www.instagram.com/hvpe.mu/'
};
const STORES = [
  { name: 'Desforges Plaza', address: 'SSR street, Desforges plaza, first floor',
    map: 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d249.9364272248096!2d57.50953637454101!3d-20.159530860539277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2smu!4v1793167817176!5m2!1sen!2smu' },
  { name: 'Caudan Waterfront', address: 'Caudan Waterfront, Dias Piers building',
    map: 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d249.93298459326616!2d57.499548276078535!3d-20.161680400570475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2smu!4v1793167911378!5m2!1sen!2smu' }
];
const LOCATIONS = {
  'Mauritius': { cur: 'Rs', rate: 1 }, 'Réunion': { cur: '€', rate: .021 },
  'France': { cur: '€', rate: .021 }, 'United Kingdom': { cur: '£', rate: .0175 }
};
const SIZES = { men: ['S', 'M', 'L', 'XL'], women: ['XS', 'S', 'M', 'L'] };

const C = (en, fr, hex) => ({ en, fr, hex });   // C(english name, french name, colour code taken from the photo)

// P(id, 'men'|'women', english name, french name, price Rs, [colours], { sale: salePrice, isNew: true })
const P = (id, g, en, fr, price, colors, o = {}) =>
  ({ id, g, n: { en, fr }, price, colors, sizes: SIZES[g], sale: o.sale || 0, isNew: !!o.isNew });

const PRODUCTS = [
  // ---- MEN (6) ----
  P(1, 'men', 'HYPE ESCAPE YOUTH', 'HYPE ESCAPE YOUTH', 700, [C('Beige', 'Beige', '#b09a81'), C('Green', 'Vert', '#2d5955'), C('Pink', 'Rose', '#b36e67')]),
  P(2, 'men', 'HYPE THROUGH', 'HYPE THROUGH', 1000, [C('Black', 'Noir', '#424040'), C('Beige', 'Beige', '#a59889'), C('Khaki', 'Kaki', '#615d52')]),
  P(3, 'men', 'HYPE PORT-LOUIS', 'HYPE PORT-LOUIS', 900, [C('Beige', 'Beige', '#b6a28a')]),
  P(4, 'men', 'HYPE OVERSIZE', 'HYPE OVERSIZE', 900, [C('Black', 'Noir', '#423d3b')]),
  P(5, 'men', 'HYPE DENIM', 'HYPE DENIM', 1300, [C('Black', 'Noir', '#423e3a'), C('Blue', 'Bleu', '#595863')], { isNew: true }),
  P(6, 'men', 'HYPE SHIRT', 'HYPE SHIRT', 1100, [C('Black', 'Noir', '#2c2726'), C('Pink', 'Rose', '#a28372')], { sale: 1000 }),
  // ---- WOMEN (5) ----
  P(7, 'women', 'HYPE NEWYORK', 'HYPE NEWYORK', 800, [C('Grey', 'Gris', '#5c5d60')]),
  P(8, 'women', 'HYPE ESCAPE CLUB', 'HYPE ESCAPE CLUB', 700, [C('Black', 'Noir', '#48474d'), C('White', 'Blanc', '#bbb4aa')], { isNew: true }),
  P(9, 'women', 'HYPE HOODIE', 'HYPE HOODIE', 1000, [C('Grey', 'Gris', '#a2998e')]),
  P(10, 'women', 'HYPE ESCAPE TSHIRT', 'HYPE ESCAPE TSHIRT', 700, [C('Black', 'Noir', '#201f1f'), C('Green', 'Vert', '#8b8f88'), C('Pink', 'Rose', '#af6b66'), C('White', 'Blanc', '#aba193')], { sale: 600 }),
  P(11, 'women', 'HYPE CLUB', 'HYPE CLUB', 800, [C('Black', 'Noir', '#3a393a'), C('Green', 'Vert', '#39655f'), C('Grey', 'Gris', '#666357'), C('White', 'Blanc', '#a99d8d')], { sale: 700 })
];
