// Created this code for the October 2024 Cohort
// I coded it to to help everyone with their Zorkington
// December 12, 2024

class Location {
  constructor(name, description, adjacentLocations, catchablePokemon) {
    this.name = name;
    this.description = description;
    this.adjacentLocations = adjacentLocations;
    this.catchablePokemon = catchablePokemon;
  }
}

// Location constructors
let home = new Location("home", "You are at home", [`sidewalk`]);
let sidewalk = new Location(
  "sidewalk",
  "You are on the sidewalk",
  [`home`, `store`],
  ["Charmander", "Bulbasaur", "Squirtle"]
);
let store = new Location("store", "You are at the store", [`sidewalk`]);

let locationCurrent = "home";

let locationLookUp = {
  home: home,
  sidewalk: sidewalk,
  store: store,
};

let locationStates = {
  home: [`sidewalk`],
  sidewalk: [`home`, `store`],
  store: [`sidewalk`],
};

function moveLocation(newLocation) {
  //console.log("26 locationCurrent",locationCurrent); //! TEST
  console.log(
    "33",
    locationLookUp[locationCurrent].adjacentLocations.includes(newLocation)
  );
  if (locationLookUp[locationCurrent].adjacentLocations.includes(newLocation)) {
    //console.log("28 newLocation",newLocation); //! TEST
    // console.log("29 locationStates",locationStates); //! TEST
    // console.log("30 locationStates[locationCurrent]",locationStates[locationCurrent]); //! TEST
    //do this
    console.log(
      `YOU are able to move from the ${locationCurrent} to the ${newLocation}!`
    );
    locationCurrent = newLocation; // this is us walking
    //console.log("35",locationLookUp); //! TEST
    //console.log("36",locationLookUp[locationCurrent]); //! TEST
    console.log(locationLookUp[locationCurrent].description);
    console.log(
      "47 Pokemon you can catch in this area:",
      locationLookUp[locationCurrent].catchablePokemon[1] // showcases how to drill into Bulbasaur
    );
    console.log(
      "48 Pokemon you can catch in this area:",
      locationLookUp[locationCurrent]["catchablePokemon"][2] // showcases how to drill into Squirtle
    );
    //console.log("Pokemon Exx", locationLookUp[locationCurrent]); // * THIS WORKS
    //console.log("Pokemon WHy:", locationLookUp.locationCurrent);  //! THIS FAILS
  } else {
    console.log(
      `You cannot move from the ${locationCurrent} to the ${newLocation}, who do you think you the Koolaid Man?!`
    );
  }
}

console.log("You are at your house.");
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
