const express=require("express")
const fs=require("fs")
const path=require("path")
const app=express()

// fs.readFile('a.txt','UTF-8',function(err,data){
//     console.log(data)
// })

//get all the files metadata that are present  in './files' dirctory
const dirpath="./files"
app.get("/files",(req,res)=>{
    fs.readdir(dirpath,function(err,files){
        if(err){
           res.status(500).json({error:"failed to retrve files"})
        }
      res.send(files)
    })
})
//get content of the given file 
 
app.get('/file/:filename',function(req,res){
  const filepath=path.join(__dirname,'./files/',req.params.filename)
  console.log(filepath)
  fs.readFile(filepath,'utf-8',function(err,data){
     if(err){
        return res.status(404).send("file not found")
     }
     res.send(data);
  })
})

app.all("*",(req,res)=>{
    res.status(404).send("404 Route not found")
})

app.listen(3000,()=>{
    console.log("App is listining on port 3000")
})