const express = require("express");
const app = express()

const PORT = process.env.PORT || 3003

app.get('/',(req,res)=>{
    res.send("Hello!!!")
})
app.get('/:name',(req,res)=>{
    let routeName = req.params.name
    if(routeName != "jacky"){
        res.send("404")
    }
    res.send("I'm Jacky")
})
app.listen(PORT,()=>{
    console.log(PORT)
})

