/* =====================================================================
   HVPE IMAGES  -  the only file you need to edit to change pictures
   ---------------------------------------------------------------------
   Pictures live in  images/  and  images/products/
   Each colour has [front, back]. The FRONT is shown first, then the customer
   can switch to the BACK. A colour with only one picture just has [front].
   ===================================================================== */

const SITE_IMAGES = {
  logo: 'images/Logo.png',
  hero: 'images/hero.jpg',
  sizeChart: 'https://d2tj08a02a6r0f.cloudfront.net/media/UNISEX_SIZING.jpg'
};

// Number = product id. One [front, back] pair per colour, in the same order as the colours in products.js
const IMAGES = {
  // 1. HYPE ESCAPE YOUTH (men) - colours: Beige, Green, Pink
  1: [['images/products/1-beige-front.jpg', 'images/products/1-beige-back.jpg'], ['images/products/1-green-front.jpg', 'images/products/1-green-back.jpg'], ['images/products/1-pink-front.jpg']],
  // 2. HYPE THROUGH (men) - colours: Black, Beige, Khaki
  2: [['images/products/2-black-front.jpg', 'images/products/2-black-back.jpg'], ['images/products/2-beige-front.jpg', 'images/products/2-beige-back.jpg'], ['images/products/2-khaki-front.jpg', 'images/products/2-khaki-back.jpg']],
  // 3. HYPE PORT-LOUIS (men) - colours: Beige
  3: [['images/products/3-beige-front.jpg', 'images/products/3-beige-back.jpg']],
  // 4. HYPE OVERSIZE (men) - colours: Black
  4: [['images/products/4-black-front.jpg', 'images/products/4-black-back.jpg']],
  // 5. HYPE DENIM (men) - colours: Black, Blue
  5: [['images/products/5-black-front.jpg'], ['images/products/5-blue-front.jpg']],
  // 6. HYPE SHIRT (men) - colours: Black, Pink
  6: [['images/products/6-black-front.jpg'], ['images/products/6-pink-front.jpg']],
  // 7. HYPE NEWYORK (women) - colours: Grey
  7: [['images/products/7-grey-front.jpg', 'images/products/7-grey-back.jpg']],
  // 8. HYPE ESCAPE CLUB (women) - colours: Black, White
  8: [['images/products/8-black-front.jpg', 'images/products/8-black-back.jpg'], ['images/products/8-white-front.jpg', 'images/products/8-white-back.jpg']],
  // 9. HYPE HOODIE (women) - colours: Grey
  9: [['images/products/9-grey-front.jpg', 'images/products/9-grey-back.jpg']],
  // 10. HYPE ESCAPE TSHIRT (women) - colours: Black, Green, Pink, White
  10: [['images/products/10-black-front.jpg'], ['images/products/10-green-front.jpg'], ['images/products/10-pink-front.jpg'], ['images/products/10-white-front.jpg']],
  // 11. HYPE CLUB (women) - colours: Black, Green, Grey, White
  11: [['images/products/11-black-front.jpg', 'images/products/11-black-back.jpg'], ['images/products/11-green-front.jpg', 'images/products/11-green-back.jpg'], ['images/products/11-grey-front.jpg', 'images/products/11-grey-back.jpg'], ['images/products/11-white-front.jpg', 'images/products/11-white-back.jpg']],
};
