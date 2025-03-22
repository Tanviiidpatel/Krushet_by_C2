import express from "express";
import connectDb from "./utils/db.js";
import dotenv from "dotenv";
import register from "./router/farmer-router.js";
import login from "./router/farmer-router.js";
import cors from "cors";

dotenv.config();
const app = express();

app.use(cors({
    origin: "*", 
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credential: true
}));

app.use(express.json());

app.use("/api/register", register);
app.use("/api/login", login);

const PORT = process.env.PORT;

connectDb().then(() => {
    app.listen(PORT, ()=> {
        console.log(`server is running at port:  ${PORT}`);
    });
});
