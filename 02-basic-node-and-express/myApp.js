let express = require('express');
let app = express();

/* 01 Answer - Meet the Node console*/
// console.log("Hello World");

/* 02 Answer - Start a Working Express Server*/
/* app.get("/", (req, res) => {
    res.send('Hello Express');
}) */  

/* 03 - Server an HTML File*/
app.get("/", (request, response) => { 
  const filePath = __dirname + '/views/index.html';
  console.log(filePath);
  response.sendFile(filePath);
})

/* 04 - Serve Static Assets*/
app.use("/public", express.static(__dirname + "/public"));





























module.exports = app;