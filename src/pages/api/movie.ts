// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import IMovie from "@/types/IMovie";
import apiUrlBuilder from "@/utils/apiUrlBuilder";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<IMovie | null>
) => {
  if (!req.query.id || typeof req.query.id !== "string") {
    return res.status(400);
  }

  const { id } = req.query;

  const request = await fetch(
    apiUrlBuilder(`/movie/${id}`, {
      language: "en-US",
      append_to_response: "watch/providers",
    })
  );

  if (!request.ok) {
    return res.status(404).json(null);
  }

  const result = await request.json();

  return res.json(result);
};

export default handler;
