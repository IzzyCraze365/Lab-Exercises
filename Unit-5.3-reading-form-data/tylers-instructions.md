1. Create your folder
2. from the terminal in your folder do the following
3. npm init -y
4. npm i express
5. Then create a server.js file
6. Update the server.js file wiht the starter code

```
// mad libs clone as an api
const express = require("express");
const app = express();

//setup our middleware
app.use(express.urlencoded({ extended: true })); // form data get parsed off of a form submission
app.use(express.static("public"));

// first word endpoint
// hit this endpoint somehow

app.get("first-word", (req, res) => {
// respond with a form
});

const port = 3000;

app.listen(port, () => {
console.log("We are always listening...");
});
```
