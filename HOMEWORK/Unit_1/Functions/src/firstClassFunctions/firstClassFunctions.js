// const carouselProducts = ["t-shirt", "sweater", "polo"];
// const gridProducts = ["mug", "small_poster", "medium_poster", "large_poster"];
// const sidebarProducts = ["sweatpants", "shorts", "skirt", "baseball_cap"];

/**
 * On our digital storefront, we advertise products in three different places:
 * the carousel, the main display grid, and the sidebar.
 *
 * In each of these places, we want to format the names of our products the same way
 *
 * To reformat the names, we use map() to apply a callback function to each
 * element of the array, and return a new array with all the modified elements
 *
 * We use the same callback function on each of the three product displays,
 * but using an anonymous function is causing the code to be very repetetive.
 *
 * Can you refactor this code to be less repetitive?
 */

// function formatProducts(carousel, grid, sidebar) {
//   const carouselProductsReformatted = carouselProducts.map((product) => {
//     // replace underscores with spaces
//     let spacedProduct = product.replace("_", " ");

//     //capitalize each word
//     productWords = spacedProduct.split(" ");
//     capitalizedProductWords = productWords.map(
//       (word) => word.charAt(0).toUpperCase() + word.substring(1)
//     );
//     capitalizedProduct = capitalizedProductWords.join(" ");
//     return capitalizedProduct;
//   });

//   const gridProductsReformatted = gridProducts.map((product) => {
//     // replace underscores with spaces
//     let spacedProduct = product.replace("_", " ");

//     //capitalize each word
//     productWords = spacedProduct.split(" ");
//     capitalizedProductWords = productWords.map(
//       (word) => word.charAt(0).toUpperCase() + word.substring(1)
//     );
//     capitalizedProduct = capitalizedProductWords.join(" ");
//     return capitalizedProduct;
//   });

//   const sidebarProductsReformatted = sidebarProducts.map((product) => {
//     // replace underscores with spaces
//     let spacedProduct = product.replace("_", " ");

//     //capitalize each word
//     productWords = spacedProduct.split(" ");
//     capitalizedProductWords = productWords.map(
//       (word) => word.charAt(0).toUpperCase() + word.substring(1)
//     );
//     capitalizedProduct = capitalizedProductWords.join(" ");
//     return capitalizedProduct;
//   });

//   return [
//     carouselProductsReformatted,
//     gridProductsReformatted,
//     sidebarProductsReformatted,
//   ];
// }



// console.log(formatProducts(carouselProducts, gridProducts, sidebarProducts));
// function productFunction(){
//   const allProducts = {
//     carouselProducts: ["t-shirt", "sweater", "polo"],
//     gridProducts: ["mug", "small_poster", "medium_poster", "large_poster"],
//     sidebarProducts : ["sweatpants", "shorts", "skirt", "baseball_cap"]
//   }
//   const newArr = Object.values(allProducts);
//   // console.log(newArr)
//   return newArr;
//   }

//   function formatProducts (products) {
//     const reformedProducts = products.map((product) => {
//       if (typeof product === 'string') {
//         let spacedProduct = product.replace("_", " ");
//         productWords = spacedProduct.split(" ");
//         capitalizedProductWords = productWords.map(
//           (word) => word.charAt(0).toUpperCase() + word.substring(1)
//         );
//         capitalizedProduct = capitalizedProductWords.join(" ");
//         return capitalizedProduct;
//       } else {
//         return product; // handle non-string elements
//       }
//     });
//     return reformedProducts;
//   }

//   console.log(formatProducts(productFunction()));




// function formatProducts (products) {
//   const reformedProducts = products.map((product) => {
//     let spacedProduct = product.replace("_", " ");
//     productWords = spacedProduct.split(" ");
//     capitalizedProductWords = productWords.map(
//       (word) => word.charAt(0).toUpperCase() + word.substring(1)
//     );
//     capitalizedProduct = capitalizedProductWords.join(" ");
//     return capitalizedProduct
//   })
//   return reformedProducts
// }

// console.log(formatProducts(carouselProducts))
// console.log(formatProducts(gridProducts))
// console.log(formatProducts(sidebarProducts))

const carouselProducts = ["t-shirt", "sweater", "polo"];
const gridProducts = ["mug", "small_poster", "medium_poster", "large_poster"];
const sidebarProducts = ["sweatpants", "shorts", "skirt", "baseball_cap"];

function formatProductName(productName) {
  let spacedProduct = productName.replace("_", " ");
  const productWords = spacedProduct.split(" ");
  const capitalizedProductWords = productWords.map(
    (word) => word.charAt(0).toUpperCase() + word.substring(1)
  );
  const capitalizedProduct = capitalizedProductWords.join(" ");
  return capitalizedProduct;
}

function formatProducts(carousel, grid, sidebar) {
  const carouselProductsReformatted = carousel.map(formatProductName);
  const gridProductsReformatted = grid.map(formatProductName);
  const sidebarProductsReformatted = sidebar.map(formatProductName);

  return [carouselProductsReformatted, gridProductsReformatted, sidebarProductsReformatted];
}

// Example usage
const formattedProducts = formatProducts(carouselProducts, gridProducts, sidebarProducts);
console.log(formattedProducts);

module.exports = formatProducts;
