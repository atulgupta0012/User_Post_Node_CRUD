const UsersModel=require("../model/UsersModel");

// user post api

exports.create=async(req,res)=>
{
    const UserCreate=req.body;
    try{
        let user= new UsersModel(UserCreate);
        await user.save();
        res.send(UserCreate);


    }catch(error)
    {
        res.status(500).send(error);
    }
}


//  user get api  by id

exports.findOne = async (req, res) => {
    const id = req.params.id;
  
    try {
      let getuserbyid = await UsersModel.findById(id);
      res.send(getuserbyid);
    } catch (error) {
      res.status(500).send(error);
    }
  };

  // get all the user data


  exports.findAll=async(req,res)=>
  {
    try{

        const getallusers= await UsersModel.find({});
        res.send(getallusers);

    }catch(error)
    {
        res.status(500).send({
            message:error.message || "Error occoured  during accessing the data"
        });
    }
  };


  
  exports.findUserById = async (req, res) => {
    try {
      const uid = req.params.uid;
      const user = await UsersModel.findOne({ uid: uid });
  
      if (user) {
        console.log(`User found by this UID: ${uid}`, user);
        res.json(user);
      } else {
        console.log("User not found");
        res.status(404).json({ message: "User not found" });
      }
    } catch (error) {
      console.error("Error finding user:", error.message);
      res.status(500).json({ error: error.message });
    }
  };

  