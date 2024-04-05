const express=require("express")

const app=express()

app.use(express.json())
//in memory object maybe replace by db later on
const users=[{

            name:"Ritwik",
            kidneys:[
            {
                healty:false
            },
            {
                healty:true
            }
          ]
    },
   
]

app.get("/",(req,res)=>{
    //write logic
    const johnKidenes=users[0].kidneys;
    const numberofKidney=johnKidenes.length
    const HealtyKidneys=johnKidenes.filter((item)=>(item.healty===true))
    const noOfHealthyKidny=HealtyKidneys.length
    console.log(HealtyKidneys.length)
    const numberOfUnhealtyKidneys=numberofKidney-noOfHealthyKidny


    //seding a json response to the user about his kindey information and about theri health
    res.json({
        numberofKidney,
        noOfHealthyKidny,
        numberOfUnhealtyKidneys

    })
})

app.post("/",(req,res)=>{
      const isHealthy=req.body.isHealthy
      users[0].kidneys.push({
        healty:isHealthy
    })

    res.json({
        msg:"Done!"
    })
})


app.put("/",(req,res)=>{
    for(let i=0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healty=true
    }

    res.json({
        msg:"all kidneys are healthy now "
    })
})

app.delete("/",function(req,res){
    //remove all the unhealthy kidneys
    //edge case if there  is no any unhealthy kindens chekc
    let flag=false
    for(let i=0;i<users[0].kidneys.length;i++){
        if(users[0].kidneys.healty===false){
            flag=true
        }
    }
    if(!flag){
        res.json({msg:"The user has no unhelahty kidneys"})
    }


    let  newKidneys=[]
    newKidneys=users[0].kidneys.filter((item)=>(item.healty ===true))
    users[0].kidneys=newKidneys

    res.json({
        msg:"Unhealty kidneys has been removed"
    })
})

app.listen(4000,()=>{
    console.log("App is listing  on port 4000")
})