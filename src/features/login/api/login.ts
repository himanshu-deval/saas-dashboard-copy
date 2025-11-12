import http from '@/shared/api/http';

export const login = (data: any) => {
  return http.post('/login', data);
};
