function greeter(name) {
    // enter your name through name parameter
    if (name === "darth vader" || name === "lex luthor") {
      /* check if their name is 'darth vader' */
      /* tell them to go away */
      console.log("Be gone you villain!!");
    } else {
      /* greet them warmly by their name */
      console.log(`Hello ${name}, you are a wonderful friend!`);
    }
  }
  
  greeter("darth vader");
  // should print 'Noooooo! That's impossible!'
  greeter("lex luthor");
  // should print 'Be gone, you villain!!!'
  greeter("luke skywalker");
  // should print 'Hello luke skywalker, you are a wonderful friend!'