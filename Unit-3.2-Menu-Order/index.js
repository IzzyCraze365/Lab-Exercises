// Your code here

const menu = {
  burger: 5.55,
  fries: 3.5,
  shake: 1.11,
  salad: 4.25,
  order: function order(orderPlaced) {
    let orderSplit = orderPlaced.split(" "); // turns the string into an array.  Splits each array item by the empty space.
    //console.log("orderSplit", orderSplit); //! TEST
    let sum = 0;
    for (foodItem of orderSplit) {
      //console.log("foodItem", foodItem); //! TEST
      if (menu[foodItem] > 0) {
        // This is checking to see if there is a price for the food item on the menu
        sum += menu[foodItem];
      } else {
        console.log(
          `I'm sorry, we do not serve ${foodItem} at this establishment.`
        );
        break;
      }
    }
    console.log(`Your total comes out to $${sum}.`);
  },
};

menu.order("burger burger burger"); //Your total comes out to $16.65.
menu.order("burger fries shake salad"); //Your total comes out to $14.41.
menu.order("salad shake"); //Your total comes out to $5.36.
menu.order("shake fries"); //Your total comes out to $4.61.
menu.order("burger pizza"); //Your total comes out to $4.61.
