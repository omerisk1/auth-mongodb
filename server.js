const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose')

app.use(cors());
app.use(express.json());

//connected to mongoose server
mongoose.connect("mongodb+srv://iskomer:xpSh76Kzq0F8GBM7@firstcluster.d5dzh.mongodb.net/weatherDB",{ useUnifiedTopology: true, useNewUrlParser: true}, (err)=> {
    if(!err){
        console.log('Database connection successful')
    }
    else{
        console.log('Error in connection' + err)
    }
})

//require route
app.use("/" , require("./routes/route.js"))

app.listen(3001 , () => {
    console.log("server is running 3001 port")
})
