import type { NextApiRequest, NextApiResponse } from "next";

export default function mapHandler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  res.end(`Psot ${id}`)
}
