import axios from "axios";

export const httpGET = async (url, header) => {
  const data = await axios.get(url, header);
  return data;
};

export const httpPOST = async (url, body, header) => {
  const data = await axios.post(url, body, header);
  console.log("hello---http", body);
  return data;
};
