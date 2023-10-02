// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { GetAllPhoneMsg } from '@/FunctionComponents/PhoneMsgs';
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

    const start_ = req.headers.start;
    const end_ = req.headers.end;
  GetAllPhoneMsg(res,start_,end_)
  
}
