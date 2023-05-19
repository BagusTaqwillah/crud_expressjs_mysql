const express =require("express");
const app=express()
const bodyParser=require("body-parser")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine','ejs')
app.set('views','./view')
app.get("/",(req,res)=>{
    res.render("pages/home",{title:"CRUD express"})
})
app.get("/about",(req,res)=>{
    res.render("pages/about",{title:"About Me"})
})
app.get("/kontak",(req,res)=>{
    res.render("pages/kontak",{title:"Contact  Person"})
})
const user=require("./routes/user")
user(app)
app.listen(4000,()=>{
    console.log("server ready")
})