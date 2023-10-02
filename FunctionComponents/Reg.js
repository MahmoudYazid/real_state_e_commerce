import { ConnectionString } from "@/MongoConfig/ConnectionString"
import {  adsModel, userModel } from "@/MongoConfig/Schema"
import mongoose from "mongoose"
import { getCookie, setCookie } from 'cookies-next'
import axios from "axios"

const AddNewInstance = (phoneInput, UsernameInput, PasswordInput, res) => {
    const instance = new userModel({
        nameSchimaInput: String(decodeURIComponent(UsernameInput))  ,
        phoneSchimaInput: String(decodeURIComponent(phoneInput)),
        passwordSchimaInput: String(decodeURIComponent(PasswordInput)) ,
    })
    instance.save()
    res.status(200).json({ res: 'done' })

}



export const SignUpFunc = (phoneInput,UsernameInput,PasswordInput,res) => {
    mongoose.connect(ConnectionString)
        .then(() => {
            userModel.find({
             
                phoneSchimaInput: String(decodeURIComponent(PasswordInput)) ,
                
            
            }).then((data) => {
                data.length == 0 ? AddNewInstance(phoneInput, UsernameInput, PasswordInput , res) : res.status(200).json({ res: 'existed' });
            })

        })
}

export const SigninFunc = (phoneInput, passwordInput, res,req) => {

    if (phoneInput == "01005648558" && passwordInput == "01005648558" ){
        setCookie('realstateadmin', 'admin', { req, res, maxAge: 60 * 6 * 24 })
        res.status(200).json({ res: 'admin' }) 
    } 
    mongoose.connect(ConnectionString)
        .then(() => {
            userModel.find({

                phoneSchimaInput: decodeURIComponent(phoneInput) ,
                passwordSchimaInput: decodeURIComponent(passwordInput) 


            }).then((data) => {
                // delete outdate add
                const Today= new Date(); 
                adsModel.findOneAndDelete({
                    useridSchimaInput: data[0]._id,
                    enddateSchimaInput: { "$lt": Today}

                }).then(()=>{

                    if (data.length > 0) {
                        setCookie('realstate', JSON.stringify(data), { req, res, maxAge: 60 * 6 * 24 })
                        res.status(200).json({ res: data })
                    } else {
                        res.status(200).json({ res: 'not existed' })

                    }
                })
                if (data.length > 0) {
                    setCookie('realstate', JSON.stringify(data), { req, res, maxAge: 60 * 6 * 24 })
                    res.status(200).json({ res: data })
                } else {
                    res.status(200).json({ res: 'not existed' })

                }
             
            })

                //
     
            })
}