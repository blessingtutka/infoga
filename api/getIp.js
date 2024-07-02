import axios from "axios";
const getIP = async (ip) => {
  const END_POINT = `https://api.ipify.org?format=json`;

  try {
    const response = await axios.get(END_POINT);
    return response.data.ip;
  } catch (error) {
    throw error;
  }
};

export default getIP;
