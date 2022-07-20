declare namespace NodeJS {
  interface ProcessEnv {
    readonly VITE_DEV_SERVER_HOST: string;
    readonly VITE_DEV_SERVER_PORT: string;
  }
}
