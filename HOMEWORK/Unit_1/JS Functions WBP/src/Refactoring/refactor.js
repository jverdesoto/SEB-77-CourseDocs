/**
 * This function calculates the price of goods after sales tax and shipping
 * for the list of most commonly sold items in our digital storefront.
 *
 * This code currently works (and passes all tests),
 * but it is hard to read due to repetitive code.
 *
 * Can you refactor it by writing functions that reduce repetition?
 */
function previewFullPrice(salesTax, shippingPrice) {
  const shirtPrice = 30.99;
  const sweatshirtPrice = 40.99;
  const smallPosterPrice = 15.99;
  const largePosterPrice = 22.99;
  const mugPrice = 12.99;
  const fullPrice = [];
  
  itemTotalPrice(shirtPrice, salesTax, shippingPrice, fullPrice)
  itemTotalPrice(sweatshirtPrice, salesTax, shippingPrice, fullPrice)
  itemTotalPrice(smallPosterPrice, salesTax, shippingPrice, fullPrice)
  itemTotalPrice(largePosterPrice, salesTax, shippingPrice, fullPrice)
  itemTotalPrice(mugPrice, salesTax, shippingPrice, fullPrice)
  
  return fullPrice
  }
  
  //---- helper functions ----
  function itemTotalPrice(item, salesTax, shippingPrice, arr) {
    priceAfterTax = item * (1 + salesTax);
    priceAfterShipping = priceAfterTax + shippingPrice;
    priceAfterShippingRounded = priceAfterShipping.toFixed(2);
    arr.push(priceAfterShippingRounded);
  }
module.exports = previewFullPrice;
