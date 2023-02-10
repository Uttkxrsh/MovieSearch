// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import ISearchResult from "@/types/ISearchResult";
import apiUrlBuilder from "@/utils/apiUrlBuilder";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<ISearchResult | null>
) => {
  if (!req.query.q || typeof req.query.q !== "string") {
    return res.status(400);
  }

  const { q } = req.query;

  const request = await fetch(
    apiUrlBuilder("/search/multi", {
      query: q,
      language: "en-US",
      include_adult: true,
    })
  );

  if (!request.ok) {
    return res.status(500).json(null);
  }

  const result = await request.json();

  return res.json(result);
};

export default handler;
