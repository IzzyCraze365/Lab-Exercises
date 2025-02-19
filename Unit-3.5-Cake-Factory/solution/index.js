class Cake {
    constructor(flavor, icing, decoration) {
      this.flavor = flavor;
      this.icing = icing;
      this.decoration = decoration;
    }
  
    describe() {
      console.log(
        `A ${this.flavor} cake with ${this.icing} icing and ${this.decoration}`
      );
    }
  }
  
  let chocolateCake = new Cake("chocolate", "caramel", "sprinkles");
  let carrotCake = new Cake("carrot", "cream cheese", "carrpt made of frosting");
  let strawberryCake = new Cake("strawberryCake", "pink", "candles");
  
  chocolateCake.describe();
  carrotCake.describe();
  strawberryCake.describe();
  // Should print:
  // 'It is a chocolate cake, with caramel frosting, and sprinkles'