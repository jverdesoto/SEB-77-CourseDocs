/**
 * This function calculates the price of goods after sales tax and shipping
 * for the list of most commonly sold items in our digital storefront.
 *
 * This code currently works (and passes all tests),
 * but it is hard to read due to repetitive code.
 *
 * Can you refactor it by writing functions that reduce repetition?
 */

/*function previewFullPrice(salesTax, shippingPrice) { */

function calculatePrice(itemPrice, salesTax, shippingPrice) {
    priceAfterTax = itemPrice * (1 + salesTax)
    priceAfterShipping = priceAfterTax + shippingPrice;
    priceAfterShippingRounded = priceAfterShipping.toFixed(2);
    return priceAfterShippingRounded
}
  function previewFullPrice(salesTax, shippingPrice) {
    const shirtPrice = 30.99;
    const sweatShirtPrice = 40.99;
    const smallPosterPrice = 15.99;
    const largePosterPrice = 22.99;
    const mugPrice = 12.99;
    
    const totalShirtPrice = calculatePrice(shirtPrice, salesTax, shippingPrice)
    const totalSweatshirtPrice = calculatePrice(sweatShirtPrice, salesTax, shippingPrice)
    const totalSmallPosterPrice = calculatePrice(smallPosterPrice, salesTax, shippingPrice)
    const totalLargePosterPrice = calculatePrice(largePosterPrice, salesTax, shippingPrice)
    const totalMugPrice = calculatePrice(mugPrice, salesTax, shippingPrice)
  
    return [
      totalShirtPrice,
      totalSweatshirtPrice,
      totalSmallPosterPrice,
      totalLargePosterPrice,
      totalMugPrice,
    ];
  }
module.exports = previewFullPrice;
