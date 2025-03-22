import express from "express";
import connectDb from "./utils/db.js";
import dotenv from "dotenv";
import register from "./router/farmer-router.js";
import login from "./router/farmer-router.js";
import cors from "cors";
import c_register from "./router/consumer-router.js";
import c_login from "./router/consumer-router.js";
import product from "./router/product-router.js";
import seedCrops from "./seed/crops.js";
import crop from "./router/crop-router.js";

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
app.use("/api/cregister",c_register);
app.use("/api/clogin",c_login);
app.use("/api/product",product);
app.use("/api/crop",crop);

const PORT = process.env.PORT;

connectDb().then(() => {
    app.listen(PORT, ()=> {
        seedCrops();
        console.log(`server is running at port:  ${PORT}`);
    });
});
