const express=require("express");


const router=express.Router();


const controller1=require("../controller/UsersController");

//post api route

router.post("/",controller1.create);



//get user by _id generated in mongodb
router.get("/:id",controller1.findOne);


router.get("/:uid", controller1.findUserById);



// get all user data

router.get("/",controller1.findAll);





module.exports=router;


