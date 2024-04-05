const express=require("express")
const bodyParser=require("body-parser")
const app=express()

const port=4000

//middleware
app.use(bodyParser.json())



// app.get("/",(req,res)=>{
//     res.send("<h1>Hello world</h1>")
// })

app.get("/route-handeler",(req,res)=>{
    //req can have header,body ,query parameters
    res.json({
        name:"Ritwik",
        age:21
    })
})

app.post("/",(req,res)=>{
    // console.log(req.body)

    console.log(req.params.message)
    res.send("Hello worold")
})


app.listen(port,function(){
    console.log(`HTTP server listening on port ${port}`)
})