const express = require('express');
const app = express();

app.use((req,res,next)=>{
    console.log("this is middleware");
    next();
});

app.get('/',(req,res)=>{
    res.send("Hello world!");
});

app.get('/profile',(req,res)=>{
    res.send("Hello Babe!");
});

app.get('/contact',(req,res,next)=>{
    return next(new Error('Bhrwe pehle bna to le contact page....'))
});

app.use((err, req, res, next) => {
    console.error(err)
    res.status(500).send('Something broke!')
  });

app.listen(3000);