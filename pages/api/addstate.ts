// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { contactmsgModel } from '@/MongoConfig/Schema'
import mongoose from 'mongoose'
import type { NextApiRequest, NextApiResponse } from 'next'
import { ConnectionString } from '../../MongoConfig/ConnectionString'
import { AddStateListItem } from '@/FunctionComponents/ListControl'



export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const item_ = req.headers.item;
  AddStateListItem(item_,res)
  
}
