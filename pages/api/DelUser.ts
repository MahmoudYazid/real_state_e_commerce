// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {  adsModel, userModel } from '@/MongoConfig/Schema'
import mongoose from 'mongoose'
import type { NextApiRequest, NextApiResponse } from 'next'
import { ConnectionString } from '../../MongoConfig/ConnectionString'
import fs from 'fs'
import path from 'path'

const DelUser = (id_:any, res:any) => {
    mongoose.connect(ConnectionString)
        .then(() => {
          adsModel.find({
            useridSchimaInput:id_
          }).then(adsFetch => {
            
            adsFetch.map((Fdata)=>{
            const targetPath = path.join(process.cwd(), `/public/UploadedImg/${Fdata.imgsrcSchimaInput}`);
              fs.unlink(targetPath   , (err) => {
                if (err) {
                  console.error('Error deleting file:', err);
                } else {
                  console.log('File deleted successfully');
                }
              })

            



            })
          

          })
        adsModel.findOneAndDelete({
              useridSchimaInput:id_
            }).then(()=>{
            userModel.findOneAndDelete({
                _id: id_
            }).then(() => {
                    res.status(200).json({ res: 'done' });
                })
            })


        })
}


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id_ = req.headers.id;
  DelUser(id_,res)
  
}
