import express from "express"
import {v4 as uuid} from "uuid" 

import {readcontent,addcontent  } from  "../../utils/helper.js"

const router = express.Router()

router.get("/fetch",async(req,res)=>{
    try {
        let datacontent=await readcontent()
        res.status(200).json({msg:datacontent})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
        
    }
})


router.post("/add",async(req,res)=>{
    try {
        let exisitingdata = await readcontent()
        let fname = req.body.fname 
        let age = req.body.age 

        let userss={
            id:uuid(),
            fname,
            age:Number(age)
        }
        exisitingdata.push(userss)
        await addcontent(exisitingdata)
        res.status(200).json({msg:"data addeded"})

    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
        
    }
})



router.put("/update/:id",async (req,res)=>{
    try {
        let exisitingdata = await readcontent()
        let zid=req.params.id 
        let user = exisitingdata.find(u=>u.id===zid)
        Object.assign(user,req.body)
        res.status(200).json({msg:exisitingdata})
    } catch (error) {

        console.log(error);
        res.status(500).json({msg:error})
        
    }
}) 
router.delete("/delete/:id",async(req,res)=>{
    try {
        let existingdata= await readcontent();

        let uuid=req.params.id;
        let user = existingdata.filter(u=>u.id !=uuid)
        await addcontent(user)
        res.status(200).json({msg:"id update"})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
        
    }
})


router.get("/catch",async(req,res)=>{
    try {
        let exisitingdata= await readcontent()
        res.status(200).json({msg:exisitingdata})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})

export default router;
