import dotenv from "dotenv";
import User from "../model/farmer-model.js";

dotenv.config();

// user registration 

const c_register = async(req, res) => {
    try {
        const { username, email, password } = req.body;

        console.log(req.body);
        // for existing username 

        // const nameExist = await User.findOne({username});

        // if (nameExist) {
        //     return res.status(400).json({ msg: "Username is already Taken by someone.Please use a diffrent user name." });
        // }

        // for existing email 

        // const userExist = await User.findOne({email});

        // if (userExist) {
        //     return res.status(400).json({ msg: "email already exists" });
        // }

        //for existing number

        // const noExist = await User.findOne({phone});

        // if(noExist){
        //     return res.status(400).json({ msg: "number is already registered" });
        // }

        const farmerCreated = await User.create({username, email, password});
        res.status(201).json({msg: "registration successfull", token: await farmerCreated.generateToken(), userId: farmerCreated._id.toString(),});


    } catch (error) {
        res.status(500).json("internal server error");
    }
};

// user login 

const c_login = async(req,res) => {
    try {
        const {email, password} = req.body;

        const userExist = await User.findOne({ email });
        console.log(userExist);

        if (!userExist) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }

        //futher access assinging based on the roles using access_token 

        const user = await userExist.comparePassword(password);

        if (user) {
            res.status(200).json({msg: "login successful",token: await userExist.generateToken(), userId: userExist._id.toString(),});
        }else{
            res.status(401).json({ message: "Invalid email or password"});
        }
    } catch (error) {
        res.status(500).json("internal server error");
    }
};

export default { c_register, c_login };