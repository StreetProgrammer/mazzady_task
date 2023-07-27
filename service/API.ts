// import axios from "axios";
// import env from '../env.config'
import axiosInstance from './axiosInstance';

export const getCategories = async () => {
  return await axiosInstance.get(`get_all_cats`);
};

export const getSubCategories = async (id: number) => {
  return await axiosInstance.get(`properties?cat=${id}`);
};

export const getOptionOptions = async (id: number) => {
  return await axiosInstance.get(`get-options-child/${id}`);
};
