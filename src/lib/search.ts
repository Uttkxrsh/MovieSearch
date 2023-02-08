const search = async (query: string) => {
  const request = await fetch(`/api/search?q=${query}`);

  if (!request.ok) {
    return null;
  }

  const result = await request.json();
  return result;
};

export default search;
