// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { ConnectionString } from '@/MongoConfig/ConnectionString';
import { adsModel } from '@/MongoConfig/Schema';
import mongoose from 'mongoose';
import type { NextApiRequest, NextApiResponse } from 'next'




export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const center_ =  req.headers.center;
  const state_ = req.headers.state;
  const type_ = req.headers.type;
  const word_ = req.headers.word;
  const start_ = req.headers.start;
  const end_ = req.headers.end;
  
  mongoose.connect(ConnectionString).then(()=>{
    adsModel.find({$or:[
        {

            stateSchimaInput: String(decodeURIComponent(String(state_))) , 
            centerSchimaInput : String(decodeURIComponent(String (center_))),
            titleSchimaInput:{$regex:String(decodeURIComponent(String (word_)))} , 
            typeofAdsSchimaInput:String(decodeURIComponent(String (type_))) 
        },{
            stateSchimaInput:String(decodeURIComponent(String (state_))) , 
            centerSchimaInput :String(decodeURIComponent(String (center_))) ,
            descSchimaInput:{$regex:String(decodeURIComponent(String (word_)))} , 
            typeofAdsSchimaInput:String(decodeURIComponent(String (type_))) 
        },{
             stateSchimaInput:String(decodeURIComponent(String (state_))) , 
            centerSchimaInput : String(decodeURIComponent(String (center_))),
            typeofAdsSchimaInput:String(decodeURIComponent(String (type_))) 
        }
    ]
        
    })  .skip(Number(start_))
        .limit(Number(end_))
        .sort({valueSchimaInput:-1})
    .then(data=>{
        res.status(200).json({res:data});
    })
  })
}

