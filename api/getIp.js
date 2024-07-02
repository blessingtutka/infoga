import { exec } from "child_process";
import axios from "axios";
const getIP = async () => {
  try {
    const response = await axios.get("https://ipecho.io/json");
    return response.data.ip;
  } catch (error) {
    throw error;
  }
};

// async function myip() {
//   const res = await fetch("https://ipecho.io/json");
//   const data = res.json();
//   return data.ip;
// }

// const ip = await myip();
// console.log(ip);

export default getIP;
