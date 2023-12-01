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
  let finalPrice = []

  const itemPrices = {
    shirtPrice: 30.99,
    sweatshirtPrice: 40.99,
    smallPosterPrice: 15.99,
    largePosterPrice: 22.99,
    mugPrice: 12.99,
  }
 for (let key in itemPrices) {
   priceAfterTax = itemPrices[key] * (1 + salesTax)
   priceAfterShipping = priceAfterTax + shippingPrice
   priceAfterShipping  = priceAfterShipping.toFixed(2)
   finalPrice.push(priceAfterShippingRounded)
 }

  return finalPrice
}

