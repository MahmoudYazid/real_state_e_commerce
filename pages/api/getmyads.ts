
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {  adsModel } from '@/MongoConfig/Schema'
import mongoose from 'mongoose'
import  { NextApiRequest, NextApiResponse } from 'next'
import { ConnectionString } from '../../MongoConfig/ConnectionString'


export default function handler(req:NextApiRequest, res:NextApiResponse){

    mongoose.connect(ConnectionString)
        .then(() => {
            adsModel.find({
                useridSchimaInput: req.headers.id
            })
           
            .sort({valueSchimaInput:-1})
            .then((data) => {
                    res.status(200).json({ res: data });
                })

        })
}