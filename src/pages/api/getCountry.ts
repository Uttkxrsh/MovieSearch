import type { NextApiRequest, NextApiResponse } from "next";
import timezones from "@/lib/timezones";

// Get users current country based on timezone
const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<string | null>
) => {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  if (!req.query.tz || typeof req.query.tz !== "string") {
    return res.status(400).send(null);
  }

  const timezone = req.query.tz;

  if (Object.keys(timezones).indexOf(timezone) !== -1) {
    return res.send(timezones[timezone as keyof typeof timezones].code);
  }

  return res.status(404).send(null);
};

export default handler;
