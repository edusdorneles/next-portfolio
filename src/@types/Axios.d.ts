import "axios";

declare module "axios" {
  export interface AxiosRequestConfig {
    id?: number;
  }
}
