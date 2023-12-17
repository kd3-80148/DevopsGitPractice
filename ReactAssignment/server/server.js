const express = require('express');
const app = express();
const routes = require('./Prod');
// app.use("/products",routes);
app.use("/products",routes);
app.listen(4000,()=>{console.log("Sever started listening at port number 4000")});

