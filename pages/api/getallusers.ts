// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { GetAllUsers } from '@/FunctionComponents/AdminUser'



export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const Start_ = req.headers.start;
  const end_ = req.headers.end;
  GetAllUsers(Start_,end_,res)
  
}

