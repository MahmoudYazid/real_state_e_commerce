// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { adsModel, centerlistModel } from '@/MongoConfig/Schema'
import mongoose from 'mongoose'
import type { NextApiRequest, NextApiResponse } from 'next'
import { ConnectionString } from '../../MongoConfig/ConnectionString'


 const ChangeValue = (IdInput:any,newvalue:any, res:any) => {
    mongoose.connect(ConnectionString)
        .then(() => {
            adsModel.findByIdAndUpdate({
                _id: IdInput
            },{
                valueSchimaInput:String(decodeURIComponent(String(newvalue)))
            })
                .then(() => {
                    res.status(200).json({ res: 'done' });
                })

        })
}


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id_ = req.headers.id;
  const newvalue_ = req.headers.newvalue;
  ChangeValue(id_,newvalue_,res)
  
}
