const express = require('express');
// const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(__dirname));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});
// //Allow all requests from all domains & localhost
// app.all('/*', function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept");
//   res.header("Access-Control-Allow-Methods", "POST, GET");
//   next();
// });
//
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));

// var contacts = [
//   {id: 1, name: "John", phone: "12321 32132"},
//   {id: 2, name: "Tony", phone: "12321 32132"},
//   {id: 3, name: "Steve", phone: "12321 32132"},
//   {id: 4, name: "Bill", phone: "12321 32132"}
// ];

// app.get('/contacts', function(req, res){
//   res.send(contacts);
// });

app.listen(port);
console.log('Server started');
