declare global {
  namespace NodeJS {
    interface ProcessEnv {
      TMDB_API_KEY: string;
      APP_URL: string;
    }
  }
}

export {};
