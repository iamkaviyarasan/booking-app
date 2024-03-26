const express =require('express');
const cors = require ('cors');
const { default: mongoose } = require('mongoose');
const bcrypt =require('bcryptjs');
const User =require ('./models/User.js');

require('dotenv').config();
const app =express();
const bcryptSalt=bcrypt.genSaltSync(10);

app.use(express.json());
app.use(cors({
    credentials:true,
    origin:'http://localhost:5173',
}));

console.log(process.env.MONGO_URL);
mongoose.connect(process.env.MONGO_URL);
// to  check if the server  is  connected to the database
mongoose.connection.on("connected",()=>{
    console.log("connected to the database")
})



app.get('/test', (req,res) =>{
    res.json('test ok');
});
app.post("/register", async (req,res) =>{
    const {name,email,password} =req.body;
    console.log(name,email,password);
   try{
    const userDoc = await User.create({
        name,
        email,
        password:bcrypt.hashSync(password,bcryptSalt),
    })
     res.json(userDoc);
    }catch (e){
        res.status(422).json(e);
    }
    

});

app.listen(4000);