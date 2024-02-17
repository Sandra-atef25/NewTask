import axios, { AxiosRequestConfig } from "axios";
const AUTH_TOKEN = "061f655549686cbe9592dc6ada554f16";
const BASE_URL = "https://api.themoviedb.org/3";
//create instance from axios then configuring defaults
//set config defaults
const instance = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: AUTH_TOKEN,
  },
});
//this function for fetching movies genres from backend
export const fetchData = async (
  url:string,
  params?:AxiosRequestConfig<any>
) => {
  const response = await instance.get(url,params);
  return response.data;
};