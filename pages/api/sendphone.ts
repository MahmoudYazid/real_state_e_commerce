// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { contactmsgModel } from '@/MongoConfig/Schema'
import mongoose from 'mongoose'
import type { NextApiRequest, NextApiResponse } from 'next'
import { ConnectionString } from '../../MongoConfig/ConnectionString'
import { SendPhoneMsg } from '@/FunctionComponents/PhoneMsgs'



export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const Phone_ = req.headers.phone;
  SendPhoneMsg(Phone_,res)
  
}

