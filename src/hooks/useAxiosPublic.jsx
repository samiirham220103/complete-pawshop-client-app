import axios from "axios";
import React from "react";

const axiosPublic = axios.create({
  baseURL: "https://fragile-teddy-lamb.cyclic.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
