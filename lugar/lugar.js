const axios = require("axios");

const key = "AIzaSyDRN7124J1p2ut5-6B9PtmBwtIZt6kbJgk";

const getLugarLatLng = async direccion => {
  const encodedUrl = encodeURI(direccion);

  const res = await axios
    .get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=${key}`
    );
    if( res.data.status === "ZERO_RESULTS" ) {
      throw new Error(`No hay resultados para la dirección ${direccion}`);
    }
    const location = res.data.results[0];
    const coors = location.geometry.location;
    return {
      direccion: location.formatted_address,
      latiutd: coors.lat,
      longitud: coors.lng
    };
};

module.exports = {
  getLugarLatLng
};