const express = require('express')
const app = express()

app.get("/", function(req,res) {
    res.send("Hello Beta!");
});
app.get("/profile", function(req,res) {
    res.send("G Abu!");
});

app.listen(3000); 
