import getLocation from "./getLocation.js";
import getTemperature from "./getTemperature.js";
import getIP from "./getIp.js";
const getInfo = async (req, res) => {
  try {
    const visitorName = req.query.visitor_name || "Blessing Tutka";
    // const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
    const ip = req.ip;
    const clientIp = ip.replace(/^::ffff:/, "");
    const city = await getLocation(clientIp);
    const temperature = await getTemperature(city);
    const greeting = `Hello, ${visitorName}!, the temperature is ${temperature} degrees Celsius in ${city}`;
    res.json({
      client_ip: clientIp,
      location: city,
      greeting: greeting,
    });
  } catch (error) {
    res.status(500).send("Internal Server Error " + error);
  }
};

export default getInfo;
