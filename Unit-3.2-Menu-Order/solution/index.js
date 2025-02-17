const menu = {
    burger: 5.0,
    fries: 3.5,
    shake: 1.11,
    salad: 4.25,
    order(orderPlaced) {
      let orderSplit = orderPlaced.split(" ");
      let sum = 0;
  
      for (let item of orderSplit) {
        sum += menu[item];
      }
      console.log(sum);
    },
  };
  
  menu.order("burger");
  menu.order("shake burger salad");
  menu.order("fries fries fries shake");