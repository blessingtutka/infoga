import axios from "axios";
const getTemperature = async (city) => {
  const { API_KEY } = process.env;
  const END_POINT = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${API_KEY}`;
  const params = {
    origin: "*",
  };
  try {
    const weather = await axios.get(END_POINT, params);
    const temperature = weather.data.main.temp || 11;
    return temperature;
  } catch (error) {
    return "N/A " + error;
  }
};

export default getTemperature;
