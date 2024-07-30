import { APP_URL } from "@/lib/constants";

const urlBuilder = (endpoint: string, query?: { [key: string]: any }) => {
  // Ensure the base URL ends with a slash
  const baseUrl = APP_URL.endsWith('/') ? APP_URL : `${APP_URL}/`;

  // Ensure the endpoint does not start with a slash
  endpoint = endpoint.startsWith('/') ? endpoint.slice(1) : endpoint;

  const queryItems = new URLSearchParams();

  if (query) {
    for (const key of Object.keys(query)) {
      queryItems.append(key, query[key]);
    }
  }

  const queryString = queryItems.toString();
  return queryString ? `${baseUrl}${endpoint}?${queryString}` : `${baseUrl}${endpoint}`;
};

export default urlBuilder;


