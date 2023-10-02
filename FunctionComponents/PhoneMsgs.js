import { ConnectionString } from "@/MongoConfig/ConnectionString"
import { contactmsgModel } from "@/MongoConfig/Schema"
import mongoose from "mongoose"



const AddNewInstance = (Phone, res) => {
    const instance = new contactmsgModel({
        msgSchimaInput: String(decodeURIComponent(String(Phone)))
    })
    instance.save()
    res.status(200).json({ res: 'done' })

}
export const SendPhoneMsg = (PhoneInput, res) => {
    mongoose.connect(ConnectionString)
        .then(() => {
            contactmsgModel.find({
                msgSchimaInput: String(decodeURIComponent(String(PhoneInput)))
            }).then((data) => {
                data.length == 0 ? AddNewInstance(PhoneInput, res) : res.status(200).json({ res: 'existed' });
            })

        })
}


export const GetAllPhoneMsg = (res, start, end) => {
    mongoose.connect(ConnectionString)
        .then(() => {
            contactmsgModel.find({
            }).skip(Number(start)).limit(Number(end) )
                .then((data) => {
                    res.status(200).json({ res: data });
                })

        })
}

