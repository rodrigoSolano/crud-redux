//Cliente de axios
//para no repetir codigo de la url de la api que se utiliza en el cliente, se crea un cliente axios con dicha url
//ejemplo:
import axios from "axios";

const clienteAxios = axios.create({
  baseURL: "http://localhost:4000/",
});

export default clienteAxios;
