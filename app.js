const argv = require("./config/yargs").argv;
const lugar = require("./lugar/lugar");
const clima = require("./clima/clima");

let getInfo = async direccion => {
  try {
    const coors = await lugar.getLugarLatLng(direccion);
    let temperatura = await clima.getClima(coors.latiutd, coors.longitud);
    return `El clima en ${coors.direccion} es de ${temperatura}°C`;
  } catch (e) {
    return `No se pudo determinar el clima en ${direccion}`;
  }
};

getInfo(argv.direccion)
  .then(res => console.log(res))
  .catch(e => console.log(e));
