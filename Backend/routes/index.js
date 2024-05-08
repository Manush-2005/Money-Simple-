var express = require('express');
var router = express.Router();
const User = require("../Database/User");
const multer = require("multer");
var upload = multer({ dest: 'uploads/' });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/signup",async(req,res)=>{

  const {name,email,password} = req.body;
  const isuser = await User.findOne({email:email});

  if(isuser){
    return res.status(404).send({message:"User exists"});
  }
  const newuser = new User({
    name:name,
    email:email,
    password:password
  });
  await newuser.save();
  res.status(201).send({message:"new user created"});


});
router.post("/login",async(req,res)=>{

  const {email,password} = req.body;
  const isuser = await User.findOne({email:email});

  if(isuser){

    if(isuser.password == password){
      res.cookie('userId', isuser._id, { maxAge: 900000, httpOnly: true });
      const id = isuser._id;
      
      return res.status(200).send({message:"Logged in and your id is ",id});
    }
   
  }
  return res.status(404).send({message:"No User exists"});

});
router.get("/getuser/:id",async(req,res)=>{
  const id = req.params.id;
  const isuser = await User.findOne({_id:id});
  if(isuser){
    return res.status(200).send({message:"Your user detail is:",isuser});
  }
  return res.status(404).send({message:"No User exists"});
 
});




module.exports = router;
