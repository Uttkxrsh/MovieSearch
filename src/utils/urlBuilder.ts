const urlBuilder = (endpoint: string, query?: { [key: string]: any }) => {
  if (endpoint.startsWith("/")) {
    endpoint.slice(1);
  }

  const queryItems = new URLSearchParams({
    api_key: process.env.TMDB_API_KEY,
  });

  if (query) {
    for (const key of Object.keys(query)) {
      queryItems.append(key, query[key]);
    }
  }

  return `${process.env.APP_URL}${endpoint}?${queryItems.toString()}`;
};

export default urlBuilder;
