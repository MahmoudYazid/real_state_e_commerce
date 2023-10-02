
import mongoose from "mongoose"
import { adminadsModel } from "../MongoConfig/Schema"
import { ConnectionString } from "@/MongoConfig/ConnectionString"

export const GetAllAdminAds = ( res) => {
    mongoose.connect(ConnectionString)
        .then(() => {
            adminadsModel.find({})
                .then((data) => {
                    res.status(200).json({ res: data });
                })

        })
}