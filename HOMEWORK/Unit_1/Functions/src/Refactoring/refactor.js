/**
 * This function calculates the price of goods after sales tax and shipping
 * for the list of most commonly sold items in our digital storefront.
 *
 * This code currently works (and passes all tests),
 * but it is hard to read due to repetitive code.
 *
 * Can you refactor it by writing functions that reduce repetition?
 */

function itemPrice(itemPriceArr, salesTax, shippingPrice){
  return itemPriceArr.map((itemPrice)=>{
    const priceAfterTax = itemPrice * (1 + salesTax);
    const priceAfterShipping = priceAfterTax + shippingPrice;
    const priceAfterShippingRounded = priceAfterShipping.toFixed(2);
  console.log(priceAfterShippingRounded);
    return priceAfterShippingRounded
  })
}


function previewFullPrice(salesTax, shippingPrice) {
  const shirtPrice = 30.99;
  const sweatshirtPrice = 40.99;
  const smallPosterPrice = 15.99;
  const largePosterPrice = 22.99;
  const mugPrice = 12.99;
  const priceArr = [shirtPrice, sweatshirtPrice, smallPosterPrice, largePosterPrice, mugPrice]

  const endArray = itemPrice(priceArr, salesTax, shippingPrice)
return endArray
}

console.log(previewFullPrice(0.08, 4.0));
module.exports = previewFullPrice;
