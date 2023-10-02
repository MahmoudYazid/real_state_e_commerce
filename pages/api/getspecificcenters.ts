// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { GetSpecificcenters } from '@/FunctionComponents/ListControl';
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

    const state_ = req.headers.state;

  GetSpecificcenters(state_,res)
  
}
