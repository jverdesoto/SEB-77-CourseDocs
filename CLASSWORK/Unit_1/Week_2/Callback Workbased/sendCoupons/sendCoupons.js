/**
 * This function takes a single user as an argument
 *
 * This function returns true only if the user has a valid phone number we
 * can send a text message to
 */
const canSendCoupon = (user) => {
  return user.phone != "";
};

/**
 * This function takes a single user, and prints a message that they have
 * received a coupon to the console
 * */
const sendCoupon = (user) => {
  console.log(`
        ---------------------------------------------------------
        Text message sent to ${user.phone}

        Hello ${user.name},
        You have received a coupon for 10% off your next purchase 
        ---------------------------------------------------------
        `);
};

/**
 * This function takes a user, and updates them in the database by
 * setting the user's hasCoupon field to true.
 */
const updateUserCouponSent = (user) => {
  user.hasCoupon = true;
};

/**
 * Write a function called sendAllCoupons() that takes four arguments:
 *  1. a list of Users
 *  2. a callback function that checks if a user has a valid phone number
 *  3. a callback function that prints a text message on the screen
 *  4. a callback function that updates the user in our database
 *
 *
 * Your function should do the following for each of the users in the first argument:
 *  1. Check if they have a valid phone number by calling the first callback function
 *  If the user does have a valid phone number:
 *   - print the text message for that user by calling the second callback function
 *   - update the user in the database by calling the third callback function
 *  If the user doesn't have a valid phone number, don't do anything for that user
 */

function sendAllCoupons(users, isValidNumber, printMessage, updateUserDB) {
  users.forEach((user) => {
    if(isValidNumber(user)) {
      printMessage(user);
      updateUserDB(user);
    }
  })
}


module.exports = {
  canSendCoupon,
  sendCoupon,
  updateUserCouponSent,
  sendAllCoupons,
};
