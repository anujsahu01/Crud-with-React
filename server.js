const express = require('express');
const mongoose = require('mongoose');
const app = express();
const dotenv = require ('dotenv');
const userRoutes = require ('./routes/userRoutes')
const cors = require('cors');

app.use(cors());
dotenv.config();
app.use(express.json());


mongoose
.connect(process.env.URI)
.then(()=>{
    console.log("database connected succesfully");
})
.catch((error)=>{
    console.log("error",error);
});



const PORT = 4000 ;
app.listen(PORT , ()=>{
console.log("server is listening on:",process.env.PORT );
});


app.use(userRoutes);