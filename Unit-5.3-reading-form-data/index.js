//* don't forget to do the following commands on the terminal

//! What Tyler Installs
// npm init -y
// npm install express
// touch server.js
// echo $null >> server.js


// mad libs clone as an API
const express = require('express');
const app = express();

// set up out middleware
app.use(express.urlencoded)

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
});