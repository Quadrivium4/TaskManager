require("dotenv").config();
const connectDB = require("./db/connect");
const express = require("express");
const app = express();
const port = 5000;
const tasks = require("./routes/tasks");
const notFound = require("./middleware/404");
app.use(express.json());
app.use(express.static("./public"));

app.use("/api/v1/tasks", tasks);
const MONGOLAB_URI = process.env.MONGOLAB_URI;
app.use(notFound);
const start = async () =>{
    try{
        await connectDB(MONGOLAB_URI || MONGO_URI);
        app.listen(port,()=>{
            console.log(`server is listening on port ${port}...`)
            console.log(MONGOLAB_URI);
        });
    }catch(error){
        console.log(error)
    }
}

start();



