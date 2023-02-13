"use client";

const MovieError = ({ error }: { error: any }) => {
  console.log({ error });
  console.log("process", process.env);

  return null;
};

export default MovieError;
