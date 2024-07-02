import { exec } from "child_process";

const getIP = () => {
  return new Promise((resolve, reject) => {
    exec("curl ip-adresim.app", (error, stdout, stderr) => {
      if (error) {
        console.error("Error executing curl:", error);
        reject(error);
        return null;
      }
      resolve(stdout.trim());
    });
  });
};

export default getIP;
