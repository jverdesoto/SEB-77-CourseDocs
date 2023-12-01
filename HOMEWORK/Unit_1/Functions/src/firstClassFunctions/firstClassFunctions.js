const carouselProducts = ["t-shirt", "sweater", "polo"];
const gridProducts = ["mug", "small_poster", "medium_poster", "large_poster"];
const sidebarProducts = ["sweatpants", "shorts", "skirt", "baseball_cap"];

function formatProducts(carousel, grid, sidebar) {
  const carouselProductsReformatted = carousel.map(productFormatter)
  const gridProductsReformatted = grid.map(productFormatter)
  const sidebarProductsReformatted = sidebar.map(productFormatter)
  function productFormatter(product){
    let spacedProduct = product.replace("_", " ")
    let productWords = spacedProduct.split(" ");
    let capitalizedProductWords = productWords.map(
    (letter) => letter.charAt(0).toUpperCase() + letter.substring(1))
    let capitalizedProduct = capitalizedProductWords.join(" ");
      return capitalizedProduct;
    };
  return [
    carouselProductsReformatted,
    gridProductsReformatted,
    sidebarProductsReformatted,
  ];
}
console.log(formatProducts(carouselProducts, gridProducts, sidebarProducts));
module.exports = formatProducts;
