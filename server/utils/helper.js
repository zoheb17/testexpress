// import { json } from "body-parser" 
import fs from "fs/promises"

let db ="/home/zoheb/testexpress/server/data.json"


async function readcontent() {
    let userdata = await fs.readFile(db,"utf-8")
    return JSON .parse (userdata)
    
}

async function addcontent(content) {
  await fs.writeFile(db,JSON.stringify(content, null , 2))
    
}


export {readcontent,addcontent}