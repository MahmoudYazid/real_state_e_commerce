
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {  adsModel } from '@/MongoConfig/Schema'
import mongoose from 'mongoose'
import type { NextApiRequest, NextApiResponse } from 'next'
import { ConnectionString } from '../../MongoConfig/ConnectionString'


export default function handler(req:NextApiRequest, res:NextApiResponse){
    const start_ = req.headers.start 
    const end_ = req.headers.end 
    mongoose.connect(ConnectionString)
        .then(() => {
            adsModel.find({})
            .skip(Number(start_))
            .limit(Number(end_))
            .sort({valueSchimaInput:-1})
            .then((data) => {
                    res.status(200).json({ res: data });
                })

        })
}