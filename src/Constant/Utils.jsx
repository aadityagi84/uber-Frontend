const BASE_URL = import.meta.env.VITE_API_URL;
export const API = {
  login: `${BASE_URL}/api/login`,
  signup: `${BASE_URL}/api/register`,
  verify: `${BASE_URL}/api/verified`,
};

export const CapAPI = {
  login: `${BASE_URL}/api/captain/login`,
  signup: `${BASE_URL}/api/captain/register`,
};
