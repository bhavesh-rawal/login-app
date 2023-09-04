import http from "./Http.Clint";


export const getAll = (ky: string) => {
  return http.get(ky)
};

export const create = (ky: string, data: any) => {
  console.log(data);

  return http.post(ky, data);
};