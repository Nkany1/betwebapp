import {dbConnect} from "../../lib/dbConnect"

export default async function handler(req, res){

    if(req.method !== "POST"){
        res.status(400).json({message: "Invalid Request type"})
    }

    //db-connect
    await dbConnect()

    const {name} = req.body;

    res.status(200).json({
        name
    })
}