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
  const price= {
    shirt : afterAllPrice(30.99, salesTax, shippingPrice),
    sweatShirt : afterAllPrice(40.99, salesTax, shippingPrice),
    smallPoster : afterAllPrice(15.99, salesTax, shippingPrice),
    largePoster: afterAllPrice(22.99, salesTax, shippingPrice),
    mugPrice : afterAllPrice(12.99, salesTax, shippingPrice),
  }
    list= Object.values(price);
  return list
  }

function afterAllPrice(productPrice, salesTax, shippingPrice){
    let priceAfterTax = productPrice * (salesTax + 1);
    let priceAfterShipping = priceAfterTax + shippingPrice;
    let priceAfterShippingRounded = priceAfterShipping.toFixed(2);
    return priceAfterShippingRounded;
  }
  



  // shirtPriceAfterTax = shirtPrice * (1 + salesTax);
  // shirtPriceAfterShipping = shirtPriceAfterTax + shippingPrice;
  // shirtPriceAfterShippingRounded = shirtPriceAfterShipping.toFixed(2);

  // sweatshirtPriceAfterTax = sweatshirtPrice * (1 + salesTax);
  // sweatshirtPriceAfterShipping = sweatshirtPriceAfterTax + shippingPrice;
  // sweatshirtPriceAfterShippingRounded = sweatshirtPriceAfterShipping.toFixed(2);

  // smallPosterPriceAfterTax = smallPosterPrice * (1 + salesTax);
  // smallPosterPriceAfterShipping = smallPosterPriceAfterTax + shippingPrice;
  // smallPosterPriceAfterShippingRounded =
  //   smallPosterPriceAfterShipping.toFixed(2);

  // largePosterPriceAfterTax = largePosterPrice * (1 + salesTax);
  // largePosterPriceAfterShipping = largePosterPriceAfterTax + shippingPrice;
  // largePosterPriceAfterShippingRounded =
  //   largePosterPriceAfterShipping.toFixed(2);

  // mugPriceAfterTax = mugPrice * (1 + salesTax);
  // mugPriceAfterShipping = mugPriceAfterTax + shippingPrice;
  // mugPriceAfterShippingRounded = mugPriceAfterShipping.toFixed(2);


module.exports = previewFullPrice;
