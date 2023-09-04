import http from "./Http.Clint";


export const getAll = (ky: string) => {
  return http.get(ky)
};