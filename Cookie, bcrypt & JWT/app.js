const cookieParser = require('cookie-parser');
const express = require('express');
const bcrypt = require('bcrypt');
const app= express();
const jwt = require('jsonwebtoken');
app.use(cookieParser());

//bcrypt ->  is used to make hashes of the passwords
//jwt -> is used to remember user by making its data -> token and then token->cookie
//then by accessing the cookie and accessing the token ,then decrypt the token using the secret phrase and use that data to remember the user
app.get('/',async (req,res)=>{
    let token =await  jwt.sign({email:"karam@dk.com"},"secret");
   res.cookie("token",token);
   res.send('Hey!'); 
});

app.get('/read',(req,res)=>{
    let data = jwt.verify(req.cookies.token,"secret");
    console.log(data);
    res.send('hello!');
 });
 

app.listen(3000,()=>{
    console.log('App is up and running!');
})