require('dotenv').config();
const express = require('express')
const app = express();

const port = process.env.PORT;
console.log(port)

app.get("/", (req,res)=>{
    res.send("Hello World")
    })
app.get("/user", (req,res)=>{
    res.json({
        name:"Gaurab",
        age: 19
    })
    })

app.listen(port, ()=>{console.log(`Listening on port ${port}`)})