import axios from "axios";

export const appAcademyData = userData => {
  return axios.post("/api/appacademy/", userData);
};

export const getUser = userId => {
 
  return axios.get(`/api/users/profile/${userId}`);
};
