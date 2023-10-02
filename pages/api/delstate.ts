// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { statelistModel } from '@/MongoConfig/Schema'
import mongoose from 'mongoose'
import type { NextApiRequest, NextApiResponse } from 'next'
import { ConnectionString } from '../../MongoConfig/ConnectionString'


 const DelAdd = (IdInput:any, res:any) => {
    mongoose.connect(ConnectionString)
        .then(() => {
            statelistModel.findOneAndDelete({
                _id: IdInput
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
  DelAdd(id_,res)
  
}
