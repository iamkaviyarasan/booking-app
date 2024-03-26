const express =require('express');
const cors = require ('cors');
const { default: mongoose } = require('mongoose');
const bcrypt =require('bcryptjs');
const jwt =require('jsonwebtoken');
const User =require ('./models/User.js');
const cookieParser =require('cookie-parser');
require('dotenv').config();
const app =express();
const bcryptSalt=bcrypt.genSaltSync(10);
const jwtsecret ='fashvuhuhhijjjvfgo';

app.use(express.json());
app.use(cookieParser());
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
    });
    console.log("user cretated")

     res.json(userDoc);
    }catch (e){
        res.status(422).json(e);
    } 
    

});
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const userDoc = await User.findOne({ email });
    if (userDoc) {
        const passOk = bcrypt.compareSync(password, userDoc.password);
        if (passOk) {
            jwt.sign({ email: userDoc.email, id: userDoc._id }, jwtsecret, {}, (err, token) => {
                if (err) throw err;
                res.cookie('token', token).json(userDoc);
            });
        } else {
            res.status(422).json('pass not ok');
        }
    } else {
        res.json('not found');
    }
});
app.get ('/profile', (req,res) =>{
    const {token } =req.cookies;
    res.json({token});
 
})


           
   

app.listen(4000);