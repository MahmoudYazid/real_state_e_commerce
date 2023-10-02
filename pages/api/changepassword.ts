// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { userModel } from '@/MongoConfig/Schema'
import mongoose from 'mongoose'
import type { NextApiRequest, NextApiResponse } from 'next'
import { ConnectionString } from '../../MongoConfig/ConnectionString'


 const ChangeValuepassword = (IdInput:any,newvalue:any, res:any) => {
    mongoose.connect(ConnectionString)
        .then(() => {
            userModel.findOneAndUpdate({
                _id: IdInput,
            },{
                passwordSchimaInput:String(decodeURIComponent(String(newvalue)))
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

  ChangeValuepassword(id_,newvalue_,res)
  
}
