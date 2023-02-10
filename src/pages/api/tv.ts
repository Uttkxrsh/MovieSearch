// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import ITv from "@/types/ITv";
import apiUrlBuilder from "@/utils/apiUrlBuilder";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<ITv | null>
) => {
  if (!req.query.id || typeof req.query.id !== "string") {
    return res.status(400);
  }

  const { id } = req.query;

  console.log(
    apiUrlBuilder(`/tv/${id}`, {
      language: "en-US",
      append_to_response: "watch/providers",
    })
  );

  const request = await fetch(
    apiUrlBuilder(`/tv/${id}`, {
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
