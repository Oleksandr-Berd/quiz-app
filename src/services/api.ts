import axios from "axios";

const instance = axios.create({
  baseURL: "https://common-server-ldx7.onrender.com/api/quiz",
});

export const getAllData = async () => {
  try {
    const response = await instance.get(`/all`);

    return response.data;
  } catch (error: any) {
    return error;
  }
};
