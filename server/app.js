import express from "express"
import dotenv from "dotenv"
dotenv.config()

import userRouter from "./controller/user/index.js"


const app = express();
app.use(express.json())

const port=process.env.PORT

app.get("/",(req,res)=>{
    try {
        res.status(200).json({msg:"test api"})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})

app.use("/user",userRouter)

app.listen(port,()=>{
    console.log(`server start http://localhost:${port}`);
})