
import mongoose from "mongoose"
import { userModel } from "../MongoConfig/Schema"
import { ConnectionString } from "@/MongoConfig/ConnectionString"

export const GetAllUsers =(start , end ,res)=>{
    mongoose.connect(ConnectionString)
        .then(() => {
            userModel.find({})
            .skip(Number(start))
            .limit(Number(end))
            .then((data) => {
                    res.status(200).json({ res: data });
                })

        })
}