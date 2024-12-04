class Location {
  // your code here
  constructor(name, description) {
    (this.name = name), (this.description = description);
  }
}

let home = new Location(/* your code here */ `home`, `You are Home`);
let sidewalk = new Location(
  /* your code here */ "sidewalk",
  "You are on the Sidewalk"
);
let store = new Location(
  /* your code here */ "sidewalk",
  "You are on the Sidewalk"
);

let locationCurrent = "home"; //! This represents our initial state

let locationLookUp = {
  // the key is a string that matches the EXACT names of our Objects
  home: home,
  sidewalk: sidewalk,
  store: store,
};

let locationStates = {
  // this determines what locations are adjacent to the current location
  home: ["sidewalk"], // you can move from home to the sidewalk
  sidewalk: ["home", "store"], // you can move from the sidewalk to the store or home
  store: ["sidewalk"], // you can move from the store to the sidewalk
};

console.log(locationLookUp[locationCurrent].description); //! this is the dynamic console.log that will change based off of where we are
// This console log is the crux of the entire project and will update the state that you are in.

function moveLocation(newLocation) {
  console.log("You are trying to move to the", newLocation + "...");
  if (locationStates[locationCurrent].includes(newLocation)) {
    console.log(
      `You have moved from the ${locationLookUp[locationCurrent].name} to the ${newLocation}.`
    );
    locationCurrent = newLocation;
    console.log(locationLookUp[locationCurrent].description);
  } else {
    console.log(
      `You cannot move from the ${locationCurrent} to the ${newLocation}.  Who do you think you are the Koolaide Man?!`
    );
  }
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
