const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();

const db = require('./models')

db.mongoose.connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() =>{
    console.log("Connected to the database");
})
.catch(err =>{
    console.log("Cannot connect to the database", err);
    process.exit();
})

var corsOptions = {
    origin:"http://localhost:3000/"
}

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended:true }));



app.get("/", (req, res)=>{
    res.json({message:"App running"})
})

app.listen({port: 8000}, () =>{
    console.log('====================================');
    console.log("Server is running on port 8000");
    console.log('====================================');
})