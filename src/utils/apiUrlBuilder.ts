const apiUrlBuilder = (endpoint: string, query?: { [key: string]: any }) => {
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

  return `https://api.themoviedb.org/3/${endpoint}?${queryItems.toString()}`;
};

export default apiUrlBuilder;
