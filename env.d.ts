declare namespace NodeJS {
  export type ProcessEnv = {
    PORT: number;
    DB_URL: string;
    DB_LOCAL_URL: string;
    NODE_ENV: string;
    DEFAULT_PASSWORD: string;
  };
}
