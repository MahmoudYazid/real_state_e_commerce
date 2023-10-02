// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { GetAllstates } from '@/FunctionComponents/ListControl';
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

    const start_ = req.headers.start;
    const end_ = req.headers.end;
  GetAllstates(res)
  
}
