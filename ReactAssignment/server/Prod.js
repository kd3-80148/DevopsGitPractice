const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const config = require('config');


const { response, param } = require('./products');
const connectionDetails = {
            host : config.get("server"),
            database: config.get("database"),
            user:config.get("user"),
            password:config.get("password")

}
const app = express.Router();
app.use(cors());
app.use(express.json());
app.get("/",(request,response)=>{
    var connection = mysql.createConnection(connectionDetails);
    var statement = `select * from products`;
    connection.query(statement,(error,result)=>{
        if(error==null)
        {
            response.send(result);
            connection.end();

        }
        else{
            resoponse.send(error);
            connection.end();
        }
    })
})

app.post("/",(request,response)=>{
    var connection = mysql.createConnection(connectionDetails);
    var statement = `insert into products values(${parseInt(request.body.productid)},'${request.body.producttitle}',${parseFloat(request.body.price)},${parseInt(request.body.stock)})`;
    connection.query(statement,(error,result)=>{
        if(error==null){
            response.send(result);
            connection.end();
        }
        else{
            response.send(error);
            connection.end();
        }
    })
})

app.delete("/:productid",(request,response)=>{
    var connection = mysql.createConnection(connectionDetails);
    var statement = `delete from products where productid=${parseInt(request.params.productid)}`;
    connection.query(statement,(error,result)=>{
        if(error==null){
            response.send(result);
            connection.end();
        }
        else{
            response.send(error);
            connection.end();
        }
    })

})

app.put("/:productid",(request,response)=>{
    var connection = mysql.createConnection(connectionDetails);
    var statement = `update products set producttitle='${request.body.producttitle}',price = ${parseFloat(request.body.price)}, stock=${parseInt(request.body.stock)} where productid=${parseInt(request.params.productid)}`;
    console.log(`${statement}`);
    connection.query(statement,(error,result)=>{
        if(error==null){
            response.send(result);
            connection.end();
        }
        else{
            response.send(error);
            connection.end();
        }
    })

})

    




module.exports= app;