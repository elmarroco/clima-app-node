const axios = require("axios");

const getClima = async (lat, lng) => {
  const res = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=c7914100082e0aa2eb4adfafb2b79756`
  );
  return res.data.main.temp;
};

module.exports = {
  getClima
};
