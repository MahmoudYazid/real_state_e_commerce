import { adminadsModel } from '@/MongoConfig/Schema'
import mongoose from 'mongoose'
import type { NextApiRequest, NextApiResponse } from 'next'
import { ConnectionString } from '../../MongoConfig/ConnectionString'

import fs from 'fs'
import path from 'path'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const _id_ = req.headers.id_;

    mongoose.connect(ConnectionString).
     then(()=>{
        adminadsModel.find({
            _id: _id_,
            
        }).then(data => {
           
            const targetPath = path.join(process.cwd(), `/public/UploadedImg/${data[0].imgsrcSchimaInput}`);
            fs.unlink(targetPath   , (err) => {
  if (err) {
    console.error('Error deleting file:', err);
  } else {
    console.log('File deleted successfully');
  }
});}).then(()=>{
  adminadsModel.findOneAndDelete({
            _id: _id_,
            
        }).then((FetchedData)=>{

           
                    res.status(200).json({res:'done'});
             

     })
})

           
      

})
}