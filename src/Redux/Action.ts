import http from './Config'


export const getAll = (ky: string) => {
  return http.get(ky)
};

export const create = (ky: string, data: any) => {
  return http.post(ky, data)
};

export const update = (id: number, ky: string, data: any) => {
    
    return http.put(`${ky}/${id}`, data);

};