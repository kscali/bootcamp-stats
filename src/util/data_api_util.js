import axios from "axios";

export const appAcademyData = userData => {
  return axios.post("/api/appacademy/", userData);
};

export const hackReactorData = userData => {
  return axios.post("/api/hackreactor/", userData);
};

export const blocData = userData => {
  return axios.post("/api/bloc/", userData);
};

export const codingDojoData = userData => {
  return axios.post("/api/codingdojo/", userData);
};

export const flatIronData = userData => {
  return axios.post("/api/flatiron/", userData);
};

export const generalAssemblyData = userData => {
  return axios.post("/api/generalassembly/", userData);
};

export const thinkfulData = userData => {
  return axios.post("/api/thinkful/", userData);
};

export const getUser = userId => {
  return axios.get(`/api/users/profile/${userId}`);
};
