require("dotenv").config();
const connectDB = require("./db/connect");
const fs = require("fs");;
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
console.log(process.env.MONGO_URI)
const mongo_uri = process.env.MONGO_URI || "mongodb://localhost:27017";
const tasks = require("./routes/tasks");
const notFound = require("./middleware/404");
app.use(express.json());
app.use(express.static("./public"));

app.use("/api/v1/tasks", tasks);

app.use(notFound);

const start = async () =>{
    try{
        console.log("goes", process.env.MONGO_URI)
        await connectDB(mongo_uri);
        app.listen(port,()=>{
            console.log(`server is listening on port ${port}...`)
        });
    }catch(error){
        console.log("hi", process.env.MONGO_URI)
        console.log(error)
    }
}

start();



