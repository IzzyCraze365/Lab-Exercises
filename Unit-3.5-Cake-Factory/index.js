class Cake {
    // your code here
    constructor(flavor, icing, decoration) {
        (this.flavor = flavor), (this.icing = icing), (this.decoration = decoration);
      }
      describe(){
        console.log(`It is a ${this.flavor} cake, with ${this.icing} frosting, and ${this.decoration}!`)
    }
}

let chocolateCake = new Cake("chocolate", "caramel", "sprinkles");
let vanillaCake = new Cake("vanilla", "penut butter", "oreos");
let strawberryCake = new Cake("vanilla", "strawberry jam", "fruit");
let mudCake = new Cake("dirt", "mud", "worms");

chocolateCake.describe();
// Should print:
// 'It is a chocolate cake, with caramel frosting, and sprinkles'
vanillaCake.describe();
strawberryCake.describe();
mudCake.describe();
