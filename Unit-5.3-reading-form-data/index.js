//* don't forget to do the following commands on the terminal

//! What Tyler Installs
// npm init -y
// npm install express
// touch server.js
// echo $null >> server.js



const express = require('express');
const app = express();

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
});