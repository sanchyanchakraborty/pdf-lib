
const payLoadLimit = "50MB";
const limitObject = { limit: payLoadLimit };
var app;
const cors = require('cors');
const express = require("express");
var port = 3000;

app = express();
app.use(express.json(limitObject));
app.use(express(limitObject));
app.use(express.text(limitObject));


app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
}));

process.env.TZ = "Europe/London";
app.listen(port);
console.log("Server Started Cluster " + process.pid + " with Port " + port);

var pdf = require('./pdfview');
app.use("/",pdf.router)