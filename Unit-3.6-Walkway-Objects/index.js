class Location {
  // your code here
  constructor(name, description) {
    (this.name = name), (this.description = description);
  }
}

let home = new Location(/* your code here */`home`, `You are Home`);
let sidewalk = new Location(/* your code here */"sidewalk","You are on the Sidewalk");
let store = new Location(/* your code here */'sidewalk','You are on the Sidewalk');

let locationCurrent = "home"; //! This represents our initial state

let locationLookUp = {
  // the key is a string that matches the EXACT names of our Objects
  "home": home,
  "sidewalk":sidewalk,
  "store":store
};

let locationStates = {
  // your code here
};

function moveLocation(newLocation) {
  // your code here
}

moveLocation("sidewalk");
// Prints 'You are on the sidewalk.'
moveLocation("store");
// Prints 'You are in the store.'
moveLocation("home");
// Prints 'You cannot go from store to home.'
moveLocation("sidewalk");
// Prints 'You are on the sidewalk.'
moveLocation("home");
// Prints 'You are at your house.'
moveLocation("park");
// Prints 'You cannot go from sidewalk to park.'
