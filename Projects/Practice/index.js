const express = require("express");
const app = express();
const path  = require('path');
const fs = require('fs')

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname,'public')));

app.get("/", (req, res) => {
    fs.readdir('./files',(err,files)=>{
        res.render("index",{files:files});
    })
});

app.post('/create',(req,res)=>{
    fs.writeFile(`./files/${req.body.task.split(' ').join('')}.txt`,req.body.details,function(err)
    {
        if(err)
        {console.log(err)}
        else
        {res.redirect('/');}
    });
});

app.post('/edit',(req,res)=>{
    fs.rename(`./files/${req.body.prev}`,`./files/${req.body.new}`,(err)=>{
        if (err) console.log(err);
        else res.redirect('/');
    })
});

app.get('/files/:filename',(req,res)=>{
    fs.readFile(`./files/${req.params.filename}`,'utf-8',(err,fileData)=>{
        res.render('info',{fileName:req.params.filename ,fileData:fileData})
    })
});

app.get('/edit/:fileName',(req,res)=>{
    res.render('edit',{fileName:req.params.fileName});
});


app.listen(3000);