const express= require('express');
const app = express();

//middleware 1

app.use(function(req,res,next) {
    console.log("Middleware 1");
    next();
});

//middleware 2

app.use(function(req, res, next) {
    console.log("Middleware 2");
    next();
})

//Routes:-
app.get("/", function(req,res) {
    res.send("Landing Page!");
});

app.get("/profile", function(req,res) {
    res.send("Profile!");
});


app.get("/about", function(req,res,next) {
    return next(new Error("Banaya hi nhi bhai!"));
});

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })

app.listen(3000);
