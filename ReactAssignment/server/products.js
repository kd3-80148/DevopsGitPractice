// const express = require('express');
// const mysql = require('mysql');
// const app = express();
// const cors = require('cors');

// const connectionDetails = {
//                             host: "localhost",
//                             database : "kdac",
//                             user: "KD3_80148_Unnati",
//                             password : "manager"
//                           };
// app.use(cors());
// // app.use((request, response, next)=>{
// //     // console.log(request.url);
// //     // console.log(request.path);
// //     response.setHeader("Access-Control-Allow-Origin", "*");
// //     response.setHeader("Access-Control-Allow-Methods", "*");
// //     response.setHeader("Access-Control-Allow-Headers", "*");
// //     next();
// // })

// app.use(express.json());//request.body will be created here a json

// app.get("/products",(request, response)=>{

//     var connection = mysql.createConnection(connectionDetails);
//     var statement = `select * from products`;
//     connection.query(statement, (error, result)=>
//     {
//         if(error== null)
//         {
//             var resultInJSONString = JSON.stringify(result);
//             response.setHeader("Content-Type","application/json");
//             connection.end();
//             response.write(resultInJSONString);
//             response.end();
//         }
//         else
//         {
//             var errorInJSONString = JSON.stringify(error);
//             response.setHeader("Content-Type","application/json");
//             connection.end();
//             response.write(errorInJSONString);
//             response.end();
//         }
//     })

// });

//  app.post("/products", (request, response)=>{
//    console.log("request body received is : ")
//    console.log(request.body);

//    var connection = mysql.createConnection(connectionDetails);

//     var statement = `insert into products values(${parseInt(request.body.productid)},'${request.body.producttitle}', '${request.body.price}','${request.body.stock}')`;

//     console.log("query prepared is : ")
//     console.log(statement);
//     connection.query(statement, (error, result)=>
//     {
//         if(error== null)
//         {
//             var resultInJSONString = JSON.stringify(result);
//             response.setHeader("Content-Type","application/json");
//             connection.end();
//             response.write(resultInJSONString);
//             response.end();
//         }
//         else
//         {
//             var errorInJSONString = JSON.stringify(error);
//             response.setHeader("Content-Type","application/json");
//             connection.end();
//             response.write(errorInJSONString);
//             response.end();
//         }
//     })


//  });

//  app.delete("/products/:No", (request, response)=>{
//    console.log("request parameters received is : ")
//    console.log(request.params.No);

//    var connection = mysql.createConnection(connectionDetails);

//     var statement = `delete from products where No = ${request.params.No}`;

//     console.log("query prepared is : ")
//     console.log(statement);
//     connection.query(statement, (error, result)=>
//     {
//         if(error== null)
//         {
//             var resultInJSONString = JSON.stringify(result);
//             response.setHeader("Content-Type","application/json");
//             connection.end();
//             response.write(resultInJSONString);
//             response.end();
//         }
//         else
//         {
//             var errorInJSONString = JSON.stringify(error);
//             response.setHeader("Content-Type","application/json");
//             connection.end();
//             response.write(errorInJSONString);
//             response.end();
//         }
//     })


//  });

//   app.put("/products/:No", (request, response)=>{
//    console.log("request parameters received is : ")
//    console.log(request.params.No);

//    console.log("request body received is : ")
//    console.log(request.body);

//    var connection = mysql.createConnection(connectionDetails);

//     var statement = `update Emp  set Name = '${request.body.Name}', 
//                      Address ='${request.body.Address}' where No=${parseInt(request.params.No)}`;

//     console.log("query prepared is : ")
//     console.log(statement);
//     connection.query(statement, (error, result)=>
//     {
//         if(error== null)
//         {
//             var resultInJSONString = JSON.stringify(result);
//             response.setHeader("Content-Type","application/json");
//             connection.end();
//             response.write(resultInJSONString);
//             response.end();
//         }
//         else
//         {
//             var errorInJSONString = JSON.stringify(error);
//             response.setHeader("Content-Type","application/json");
//             connection.end();
//             response.write(errorInJSONString);
//             response.end();
//         }
//     })


//  });

// app.listen(5000, ()=>{console.log("server started at 9999")})

