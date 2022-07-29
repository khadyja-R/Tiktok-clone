const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const tiktok = require("./dbshema")
const port = 8000;
const connect_url = `mongodb+srv://tiktok-clone:j5C6StaqlknZR4Wg@cluster0.enytv.mongodb.net/?retryWrites=true&w=majority`
const app = express();

// middlewares
app.use(express.json());

app.use((req,res,next)=>{
    res.setHeader('Acess-Control-Allow-Origin', '*'),
    res.setHeader('Acess-Control-Allow-Headers', '*'),
    next()

})
// db config 
mongoose.connect(connect_url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

// api endpoints
app.get("/",  (req,res) => res.status(200).send("hello mern stack developer khadyja "));
app.post("/video/posts" , (req , res ) =>{
    const dbvideos = req.body
    tiktok.create(dbvideos , (err, data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data);
        }
    })
})


app.get("/video/posts" , (req, res)=>{
    tiktok.find((err, data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data);
        }
    })
})

// listen 
app.listen(port, () => console.log("your app is running now on localhost: ${port}"));


