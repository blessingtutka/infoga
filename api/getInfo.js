import getLocation from "./getLocation.js";
import getTemperature from "./getTemperature.js";

const getInfo = async (req, res) => {
  try {
    const visitorName = req.query.visitor_name || "Blessing Tutka";
    let clientIp = req.ip;
    if (clientIp.startsWith("::ffff:")) {
      clientIp = clientIp.split("::ffff:")[1];
    }

    const city = await getLocation(clientIp);
    const temperature = await getTemperature("Goma");

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
