import axios from "axios";

export const appAcademyData = userData => {
  return axios.post("/api/appacademy/", userData);
};
