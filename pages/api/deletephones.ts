// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { contactmsgModel } from '@/MongoConfig/Schema'
import mongoose from 'mongoose'
import type { NextApiRequest, NextApiResponse } from 'next'
import { ConnectionString } from '../../MongoConfig/ConnectionString'


 const DelMsg = (PhoneInput:any, res:any) => {
    mongoose.connect(ConnectionString)
        .then(() => {
            contactmsgModel.findOneAndDelete({
                msgSchimaInput: String(decodeURIComponent(String(PhoneInput)))
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
  const Phone_ = req.headers.phone;
  DelMsg(Phone_,res)
  
}
