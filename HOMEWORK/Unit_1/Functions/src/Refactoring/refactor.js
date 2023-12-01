function calculatePrice(productPrice, salesTax, shippingPrice) {
  const priceAfterTax = productPrice * (1 + salesTax);
  const priceAfterShipping = priceAfterTax + shippingPrice;
  return priceAfterShipping.toFixed(2);
}

function previewFullPrice(salesTax, shippingPrice) {
  const shirtPrice = 30.99;
  const sweatshirtPrice = 40.99;
  const smallPosterPrice = 15.99;
  const largePosterPrice = 22.99;
  const mugPrice = 12.99;

  const shirtPriceAfterShipping = calculatePrice(shirtPrice, salesTax, shippingPrice);
  const sweatshirtPriceAfterShipping = calculatePrice(sweatshirtPrice, salesTax, shippingPrice);
  const smallPosterPriceAfterShipping = calculatePrice(smallPosterPrice, salesTax, shippingPrice);
  const largePosterPriceAfterShipping = calculatePrice(largePosterPrice, salesTax, shippingPrice);
  const mugPriceAfterShipping = calculatePrice(mugPrice, salesTax, shippingPrice);

  console.log('Shirt Price After Shipping:', shirtPriceAfterShipping);
  console.log('Sweatshirt Price After Shipping:', sweatshirtPriceAfterShipping);
  console.log('Small Poster Price After Shipping:', smallPosterPriceAfterShipping);
  console.log('Large Poster Price After Shipping:', largePosterPriceAfterShipping);
  console.log('Mug Price After Shipping:', mugPriceAfterShipping);

  return [
    shirtPriceAfterShipping,
    sweatshirtPriceAfterShipping,
    smallPosterPriceAfterShipping,
    largePosterPriceAfterShipping,
    mugPriceAfterShipping,
  ];
}

// Example: 
const salesTax = 0.1; 
const shippingPrice = 5.0;

const result = previewFullPrice(salesTax, shippingPrice);
console.log('Result:', result);

module.exports = previewFullPrice;
