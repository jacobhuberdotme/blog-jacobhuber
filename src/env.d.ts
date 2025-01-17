declare namespace NodeJS {
    export interface ProcessEnv {
      DATABASE_URL: string; // Ensure this is always a string
    }
  }