/**
 * This function calculates the price of goods after sales tax and shipping
 * for the list of most commonly sold items in our digital storefront.
 *
 * This code currently works (and passes all tests),
 * but it is hard to read due to repetitive code.
 *
 * Can you refactor it by writing functions that reduce repetition?
 */
function fullPrice(itemPrice, salesTax, shippingPrice) {
  const priceAfterTax = itemPrice * (1 + salesTax);
  const priceAfterShipping = priceAfterTax + shippingPrice
  const priceAfterShippingRounded = priceAfterShipping.toFixed(2);
  return priceAfterShippingRounded
}

function previewFullPrice(salesTax, shippingPrice) {
  const shirtPrice = 30.99;
  const sweatshirtPrice = 40.99;
  const smallPosterPrice = 15.99;
  const largePosterPrice = 22.99;
  const mugPrice = 12.99;

  return [fullPrice(shirtPrice, salesTax, shippingPrice),
        fullPrice(sweatshirtPrice, salesTax, shippingPrice),
        fullPrice(smallPosterPrice, salesTax, shippingPrice),
        fullPrice(largePosterPrice, salesTax, shippingPrice),
        fullPrice(mugPrice, salesTax, shippingPrice)
  ]
}

module.exports = previewFullPrice;
