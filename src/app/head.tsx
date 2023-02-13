import { APP_DESCRIPTION, APP_TITLE } from "@/lib/constants";

// TODO: move metadata to pages - https://beta.nextjs.org/docs/api-reference/metadata
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
