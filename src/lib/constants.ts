export const APP_URL = !!process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : process.env.NEXT_PUBLIC_APP_URL;

export const APP_TITLE = "Where to watch";
export const APP_DESCRIPTION =
  "Search for movies and see information on where to stream, rent or buy them.";

export {};
