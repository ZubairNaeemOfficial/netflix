const express=require('express');
const app=express()

const bodyParser = require("body-parser");
const route=require('./server/routes/auth')

const cors = require('cors');
const dotenv=require('dotenv') 
dotenv.config();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false, limit: '5mb' }));
app.use(bodyParser.json());
app.use('/',route)


const port=process.env.PORT

app.listen(port,'localhost',()=>{
    console.log(`port is running at: http://localhost:${port}`)
})