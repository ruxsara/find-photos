import { AxiosRequestConfig } from "axios";
import { GetPhotosResponse } from "../types/Photos";
import { axiosInstance } from "./axios.config";

export const getPhotosByTerm = async (setPhotos: any, term: string) => {
  const config: AxiosRequestConfig = {
    params: {
      query: term,
    },
  };
  const response: GetPhotosResponse = await axiosInstance.get("photos", config);
  setPhotos(response.data.results);
};
