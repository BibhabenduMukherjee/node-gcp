const express = require("express")

const app = express();

app.get("/" ,(req , res) => {
    res.send("Hello from node server")
})

app.listen(8080 , ()=>{
    console.log("started..")
})
