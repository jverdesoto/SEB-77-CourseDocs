/**
 * This function calculates the price of goods after sales tax and shipping
 * for the list of most commonly sold items in our digital storefront.
 *
 * This code currently works (and passes all tests),
 * but it is hard to read due to repetitive code.
 *
 * Can you refactor it by writing functions that reduce repetition?
 */



function totalPrice(productPrice, shippingPrice, salesTax) {
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


const shirtPriceAfterShippingRounded = totalPrice(shirtPrice, shippingPrice, salesTax);
const sweatshirtPriceAfterShippingRounded = totalPrice(sweatshirtPrice, shippingPrice, salesTax);
const smallPosterPriceAfterShippingRounded = totalPrice(smallPosterPrice, shippingPrice, salesTax);
const largePosterPriceAfterShippingRounded = totalPrice(largePosterPrice, shippingPrice, salesTax);
const mugPriceAfterShippingRounded = totalPrice(mugPrice, shippingPrice, salesTax);


return [
  shirtPriceAfterShippingRounded,
  sweatshirtPriceAfterShippingRounded,
  smallPosterPriceAfterShippingRounded,
  largePosterPriceAfterShippingRounded,
  mugPriceAfterShippingRounded,
];
}
module.exports = previewFullPrice;



