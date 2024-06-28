const cookieParser = require('cookie-parser');
const express = require('express');
const bcrypt = require('bcrypt');
const app= express();
const jwt = require('jsonwebtoken');
app.use(cookieParser());      // very imp in order to be avle to read the data of cookie when accessing it on the other route.

//Cookie creation and using it on the other route
// app.get('/',(req,res)=>{
//    res.cookie("name","Karam");
//    res.send('Hey!'); 
// });

// app.get('/read',(req,res)=>{
//     console.log(req.cookies);
//     res.send('Read pages'); 
//  });
 
//bcrypt ->  is used to make hashes of the passwords

//making the hash by using 10 rounds of the salt and making the password:'karam' as hash
// app.get('/read',(req,res)=>{
//     bcrypt.genSalt(10, function(err, salt) {
//         bcrypt.hash("karam", salt, function(err, hash) {
//                     console.log(hash);
            
//         });
//     })
//     res.send('hello!');
//  });

//comparing the hash with the new password
// app.get('/read',(req,res)=>{
//     bcrypt.compare('karam','$2b$10$1LwvX3QYqHfCvuxIPrN5YuBlj1XPOIWJ65UX8qpHPuF.AJhVl7We.',(err,result)=>{
//         console.log(result);
//     });
//     res.send('hello!');
//  });

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
