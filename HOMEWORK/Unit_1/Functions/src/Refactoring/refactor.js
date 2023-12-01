/**
 * This function calculates the price of goods after sales tax and shipping
 * for the list of most commonly sold items in our digital storefront.
 *
 * This code currently works (and passes all tests),
 * but it is hard to read due to repetitive code.
 *
 * Can you refactor it by writing functions that reduce repetition?
 */


function calculatePrice(basePrice, salesTax, shippingPrice) {
  const priceAfterTax = basePrice * (1 + salesTax);
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

  return [
    shirtPriceAfterShipping,
    sweatshirtPriceAfterShipping,
    smallPosterPriceAfterShipping,
    largePosterPriceAfterShipping,
    mugPriceAfterShipping,
  ];
}

module.exports = previewFullPrice;
