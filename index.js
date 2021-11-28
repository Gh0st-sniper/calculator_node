const express = require('express');
const app = express();
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended: true}))

app.get("/", (req,res) => res.sendFile(__dirname +  "/index.html"))

app.post("/", (req,res) => {

    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);

    let sum = num1 + num2;
    res.send("total"+ sum);

});

app.listen(8000, () => console.log("Running on port 8000"))