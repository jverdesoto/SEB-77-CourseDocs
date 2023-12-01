/**
 * This function calculates the price of goods after sales tax and shipping
 * for the list of most commonly sold items in our digital storefront.
 *
 * This code currently works (and passes all tests),
 * but it is hard to read due to repetitive code.
 *
 * Can you refactor it by writing functions that reduce repetition?
 */
// function previewFullPrice(salesTax, shippingPrice) {
//   const shirtPrice = 30.99;
//   const sweatshirtPrice = 40.99;
//   const smallPosterPrice = 15.99;
//   const largePosterPrice = 22.99;
//   const mugPrice = 12.99;

//   shirtPriceAfterTax = shirtPrice * (1 + salesTax);
//   shirtPriceAfterShipping = shirtPriceAfterTax + shippingPrice;
//   shirtPriceAfterShippingRounded = shirtPriceAfterShipping.toFixed(2);

//   sweatshirtPriceAfterTax = sweatshirtPrice * (1 + salesTax);
//   sweatshirtPriceAfterShipping = sweatshirtPriceAfterTax + shippingPrice;
//   sweatshirtPriceAfterShippingRounded = sweatshirtPriceAfterShipping.toFixed(2);

//   smallPosterPriceAfterTax = smallPosterPrice * (1 + salesTax);
//   smallPosterPriceAfterShipping = smallPosterPriceAfterTax + shippingPrice;
//   smallPosterPriceAfterShippingRounded =
//     smallPosterPriceAfterShipping.toFixed(2);

//   largePosterPriceAfterTax = largePosterPrice * (1 + salesTax);
//   largePosterPriceAfterShipping = largePosterPriceAfterTax + shippingPrice;
//   largePosterPriceAfterShippingRounded =
//     largePosterPriceAfterShipping.toFixed(2);

//   mugPriceAfterTax = mugPrice * (1 + salesTax);
//   mugPriceAfterShipping = mugPriceAfterTax + shippingPrice;
//   mugPriceAfterShippingRounded = mugPriceAfterShipping.toFixed(2);

//   return [
//     shirtPriceAfterShippingRounded,
//     sweatshirtPriceAfterShippingRounded,
//     smallPosterPriceAfterShippingRounded,
//     largePosterPriceAfterShippingRounded,
//     mugPriceAfterShippingRounded,
//   ];
// }
// module.exports = previewFullPrice;

// 
// 
// 
// function totalPrice(itemPrice, salesTax, shippingPrice){
//   let priceAfterTax = itemPrice * (salesTax + 1);
//   let priceAfterShipping = priceAfterTax + shippingPrice;
//   let roundedPrice = priceAfterShipping.toFixed(2);
//   return roundedPrice;
// }

// // console.log(totalPrice(100, .07, 5));
// function toArr(price){
//   displayPrice(salesTax, shippingPrice)
//   const newArr= Object.values(price);
//   console.log(newArr)
//   return newArr
// }

// function displayPrice(salesTax, shippingPrice){
// const price= {
//   shirt : totalPrice(30.99, salesTax, shippingPrice),
//   sweatShirt : totalPrice(40.99, salesTax, shippingPrice),
//   smallPoster : totalPrice(15.99, salesTax, shippingPrice),
//   largePoster: totalPrice(22.99, salesTax, shippingPrice),
//   mugPrice : totalPrice(12.99, salesTax, shippingPrice),
// }
//   const arr= toArr(price);
//   // return price;
//   return arr;
// }


// function previewFullPrice(salesTax, shippingPrice) {
//   return displayPrice(salesTax, shippingPrice)
// }
// 
// 
// 

// function totalPrice(itemPrice, salesTax, shippingPrice){
//   let priceAfterTax = itemPrice * (salesTax + 1);
//   let priceAfterShipping = priceAfterTax + shippingPrice;
//   let roundedPrice = priceAfterShipping.toFixed(2);
//   return roundedPrice;
// }


// function displayPrice(salesTax, shippingPrice){
// const price= {
//   shirt : totalPrice(30.99, salesTax, shippingPrice),
//   sweatShirt : totalPrice(40.99, salesTax, shippingPrice),
//   smallPoster : totalPrice(15.99, salesTax, shippingPrice),
//   largePoster: totalPrice(22.99, salesTax, shippingPrice),
//   mugPrice : totalPrice(12.99, salesTax, shippingPrice),
// }
 
//   const newArr= Object.values(price);
// // return price;
//   return newArr;
// }

// function previewFullPrice(salesTax, shippingPrice) {
//   displayPrice(salesTax, shippingPrice)
// }




// function totalPrice(itemPrice, salesTax, shippingPrice){
//   let priceAfterTax = itemPrice * (salesTax + 1);
//   let priceAfterShipping = priceAfterTax + shippingPrice;
//   let roundedPrice = priceAfterShipping.toFixed(2);
//   return roundedPrice;
// }

// // console.log(totalPrice(100, .07, 5));
// function toArr(price){

//   const newArr= Object.values(price);
//   console.log(newArr)
//   return newArr
// }


// function previewFullPrice(salesTax, shippingPrice) {
//   const price= {
//     shirt : totalPrice(30.99, salesTax, shippingPrice),
//     sweatShirt : totalPrice(40.99, salesTax, shippingPrice),
//     smallPoster : totalPrice(15.99, salesTax, shippingPrice),
//     largePoster: totalPrice(22.99, salesTax, shippingPrice),
//     mugPrice : totalPrice(12.99, salesTax, shippingPrice),
//   }
//     const arr= toArr(price);
    
//     // return price;
//     return arr;
// }

// module.exports = previewFullPrice;


function totalPrice(itemPrice, salesTax, shippingPrice){
  let priceAfterTax = itemPrice * (salesTax + 1);
  let priceAfterShipping = priceAfterTax + shippingPrice;
  let roundedPrice = priceAfterShipping.toFixed(2);
  return roundedPrice;
}

function previewFullPrice(salesTax, shippingPrice) {
  const price= {
    shirt : totalPrice(30.99, salesTax, shippingPrice),
    sweatShirt : totalPrice(40.99, salesTax, shippingPrice),
    smallPoster : totalPrice(15.99, salesTax, shippingPrice),
    largePoster: totalPrice(22.99, salesTax, shippingPrice),
    mugPrice : totalPrice(12.99, salesTax, shippingPrice),
  }
  const newArr= Object.values(price);
  return newArr

}

module.exports = previewFullPrice;