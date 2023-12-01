/**
 * This function calculates the price of goods after sales tax and shipping
 * for the list of most commonly sold items in our digital storefront.
 *
 * This code currently works (and passes all tests),
 * but it is hard to read due to repetitive code.
 *
 * Can you refactor it by writing functions that reduce repetition?
 */

/*
const allItems = [
  ["shirt", 30.99]
  ["sweatshirt", 40.99]
  ["smallPoster", 15.99]
  ["largePoster", 22.99]
  ["mug", 12.99]
]
allItems.forEach(function(array){
array.forEach(function(another){
  let values = another[2];
  return values;
});
});
*/
// salesprice 0.08 shippingprice 4.0


function totalPrice(price, shippingPrice, salesTax){
  PriceAfterTax = price * (1 + salesTax);
  PriceAfterShipping = PriceAfterTax + shippingPrice;
  return PriceAfterShipping.toFixed(2);}


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
