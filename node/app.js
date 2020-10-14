const express = require('express')
const mysql = require('mysql');

const app = express()

const connection = mysql.createConnection({
  host: process.env.mysql_host,
  user: process.env.mysql_user,
  password: process.env.mysql_pass,
  database: process.env.mysql_db
});

let isConnected = false;

connection.connect((err) => {
  isConnected = (err === null);
  console.log('Connected to MySQL Server!');
});

app.get('/', (req, res) => {
    let dom ;
    dom = "<h1> Hello World! </h1>";
    dom += "<br>Connection to MySQL Server : ";
    dom += (isConnected) ? "OK" : "ERROR";
    res.send(dom);
})

app.listen(process.env.port, () => {
  console.log("Demorgordon is onfire");
})