import axios from "axios";
const getLocation = async (ip) => {
  const END_POINT = `https://ipapi.co/${ip}/json/`;

  try {
    const goe = await axios.get(END_POINT);

    return goe.data.city || "Goma";
  } catch (error) {
    return "Unknown location";
  }
};

export default getLocation;
