var express = require("express")

var app = express()

app.use(express.json())

var users = [
    {
        id : 1,
        name : "java"
    },{
        id : 2,
        name : "python"
    }
]

app.get("/",(req,res)=>{
    res.send(" main page")
})

app.get("/users",(req,res)=>{
    res.json(users)
})

app.get("/users/:id",(req,res)=>{
    var userid = parseInt(req.params.id)
    var result = users.find(item=>item.id == userid)
    res.json(result)
})

app.put("/users/:id",(req,res)=>{
    var userid = parseInt(req.params.id)
    var result = users.find(item=>item.id == userid)
    if(result){
        result.name = req.body.name
        res.json(result)
    }else{
        res.status(404).json({message : "unable to update the product"})
    }
})

app.delete("/users/:id",(req,res)=>{
    var userid = parseInt(req.params.id)
    var result = users.find(item=>item.id == userid)
    if(result){
      users =  users.filter(item=> item.id != userid)
      res.json(users)
    }else{
        res.status(404).json({message : "unable to delete"})
    }
})

var port = 2025
app.listen(port,()=>{
    console.log("server running");
    
})