/**
 * This function defines and calls 4 other functions.
 *
 * Some are function delarations, some are function expressions.
 *
 * Due to hoisting, some of these functions don't work as expected.
 *
 * When the greetingGenerator("John Doe"", "JavaScript Store") works, it should return:
 * "Hello John Doe! Welcome to the JavaScript Store!"
 *
 * Without changing any code (only re-ordering the lines), can you fix this
 * file so that it returns the correct string?
 */

function greetingGenerator(customerName, storeName) {
  const hello = "Hello ";
  const welcome = "Welcome to the ";

  const customer = (customer) => `${customer}! `;
  const store = (storeName) => `${storeName}!`;

  let greeting = hello;
  greeting += customer(customerName);
  greeting += welcome;
  greeting += store(storeName);

  return greeting;
}

console.log(greetingGenerator("John Doe", "JavaScript Store"));
module.exports = greetingGenerator;