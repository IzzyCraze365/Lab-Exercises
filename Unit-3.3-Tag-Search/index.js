let library = [
  {
    title: "A Game of Thrones",
    tags: ["fantasy", "george r.r. martin"],
  },
  {
    title: "Eloquent JavaScript",
    tags: ["technology", "programming", "marijn haverbeke"],
  },
  {
    title: "The Fellowship of the Ring",
    tags: ["fantasy", "jrr tolkien"],
  },
  {
    title: "The Return of the King",
    tags: ["fantasy", "jrr tolkien"],
  },
  {
    title: "The Anthropocene Reviewed",
    tags: ["nonfiction", "john green"],
  },
  {
    title: "The Left Hand of Darkness",
    tags: ["sci-fi", "ursula le guin "],
  },
  // add more books if you would like
];

function search(tag) {
  // your code here
  let bookSelection = library.filter((somebook) => somebook.tags.includes(tag)); //somebook can literaly be any unused variable
  // console.log("1", bookSelection); //! TEST
  let bookTitles = []; // creating a new array of books that we can push the book titles into
  for (let i = 0; i < bookSelection.length; i++) {
    //console.log("Inside loop", bookSelection[i].title); //! TEST
    bookTitles.push(bookSelection[i].title);
  }
  return bookTitles;
}

console.log(search("fantasy"));
console.log(search("sci-fi"));
console.log(search("nonfiction"));
console.log(search("technology"));
