const express = require("express")

const app = express();

app.get("/" ,(req , res) => {
    res.send("Hello from node server")
})

app.listen(80 , ()=>{
    console.log("started..")
})