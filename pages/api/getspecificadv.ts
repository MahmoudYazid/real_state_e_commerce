// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { ConnectionString } from '@/MongoConfig/ConnectionString';
import { adsModel } from '@/MongoConfig/Schema';
import mongoose from 'mongoose';
import type { NextApiRequest, NextApiResponse } from 'next'




export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id_ = req.headers.id_;
  
  mongoose.connect(ConnectionString).then(()=>{
    adsModel.find({
        _id:id_
    }).then(data=>{
        res.status(200).json({res:data});
    })
  })
}

