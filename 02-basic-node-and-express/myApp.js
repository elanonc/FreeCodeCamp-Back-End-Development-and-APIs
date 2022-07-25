require('dotenv').config()
let express = require('express');
let app = express();

// 01 Answer - Meet the Node console
// console.log("Hello World");

// 02 Answer - Start a Working Express Server*/
/* app.get("/", (request, response) => {
    response.send('Hello Express');
}) 

// 03 Answer - Server an HTML File
/*app.get("/", (request, response) => { 
  const filePath = __dirname + '/views/index.html';
  console.log(filePath);
  response.sendFile(filePath);
})*/

// 04 Answer - Serve Static Assets
// app.use("/public", express.static(__dirname + "/public"));

// 05 Answer - Serve JSON on a Specific Route
/*app.get("/json", (request, response) => {
  const data = {
    "message": "Hello json"
  };
  response.json(data);
})*/

// 06 Answer - Use the .env File
/*app.get("/json", (req, res) => {
  const json = { message: "Hello json" };
  json.message = process.env.MESSAGE_STYLE === "uppercase" ? json.message.toUpperCase() : json.message;
  res.json(json);
});
*/

// 07 Answer - Implement a Root-Level Request Logger Middleware
/*app.use((request, response, next) => {
  console.log(`${request.method} ${request.path} - ${request.ip}`);
  next();
});*/

// 08 Answer - Chain Middleware to Create a Time Server
/*app.get('/now', (request, response, next) => {
  request.time = new Date().toString();
  next();
}, (request, response) => {
  response.json({time: request.time});
});*/

// 09 Answer - Get Route Parameter Input from the Client
/*app.get("/:word/echo", (request, response) => {
  response.json({ echo: request.params.word });
})*/

// 10 Answer - Get Query Parameter Input from the Client
app.route("/name").get( (request, response) => {
  // console.log(request.query);
  response.json( { name: `${request.query.first} ${request.query.last}`} );
})



















module.exports = app;