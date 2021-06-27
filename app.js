const express = require('express');
const app = express();

app.get('/', (req, res) =>{
    res.send("Welcome to the home pape");
});

const port = process.env.port || 3000;
app.listen(8081,()=> {
    console.log("Hello World");
});

