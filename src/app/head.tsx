import { APP_DESCRIPTION, APP_TITLE } from "@/lib/constants";

export default function Head() {
  return (
    <>
      <title>{APP_TITLE}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content={APP_DESCRIPTION} />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
