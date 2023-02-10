import { APP_URL } from "@/lib/constants";

const urlBuilder = (endpoint: string, query?: { [key: string]: any }) => {
  if (endpoint.startsWith("/")) {
    endpoint = endpoint.slice(1);
  }

  const queryItems = new URLSearchParams({});

  if (query) {
    for (const key of Object.keys(query)) {
      queryItems.append(key, query[key]);
    }
  }

  return `${APP_URL}${endpoint}?${queryItems.toString()}`;
};

export default urlBuilder;
