import User from "../model/farmer-model.js";
import dotenv from "dotenv";

dotenv.config();


const home = async(req, res) => {
    try {
        res.status(200).json({ message: "Dash board"});
    } catch (error) {
        console.log(error);
    }
};

// user registration 

const register = async(req, res) => {
    try {
        const { username, email, password } = req.body;

        // for existing username 

        // const nameExist = await User.findOne({username});

        // if (nameExist) {
        //     return res.status(400).json({ msg: "Username is already Taken by someone.Please use a diffrent user name." });
        // }

        // // for existing email 

        // const userExist = await User.findOne({email});

        // if (userExist) {
        //     return res.status(400).json({ msg: "email already exists" });
        // }

        //for existing number

        // const noExist = await User.findOne({phone});

        // if(noExist){
        //     return res.status(400).json({ msg: "number is already registered" });
        // }

        console.log(req.body);
        const farmerCreated = await User.create({username, email, password});
        res.status(201).send("creeated succesfully");


    } catch (error) {
        res.status(500).json("internal server error");
    }
};

// user login 

const login = async(req,res) => {
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

export default {home, register, login};