// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from 'next'
import { AddcenterTypeListItem } from '@/FunctionComponents/ListControl'



export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const center_ = req.headers.center;
  const state_ = req.headers.state;
  AddcenterTypeListItem( center_,state_,res)
  
}
