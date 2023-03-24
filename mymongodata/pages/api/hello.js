// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import dbConnect from "@/utils/dbConnect"


dbConnect()


export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
