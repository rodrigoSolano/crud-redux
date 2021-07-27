import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_ERROR,
  AGREGAR_PRODUCTO_EXITO,
} from "../types";

import Swal from "sweetalert2";
import clienteAxios from "../config/axios";

//Crear nuevos productos
export function crearNuevoProductoAction(producto) {
  return async(dispatch) => {
    dispatch(agregarProducto());
    try {
      //insertar en la API
      await clienteAxios.post("/productos", producto);
      dispatch(agregarProductoExito(producto));
      //alerta
      Swal.fire("Correcto","El producto se agrego correctamente","success")
    } catch (error) {
      console.log(error);
      dispatch(agregarProductoError(true));
    }
  };
}

const agregarProducto = () => ({
  type: AGREGAR_PRODUCTO,
});

const agregarProductoExito = (producto) => ({
  type: AGREGAR_PRODUCTO_EXITO,
  payload: producto,
});

const agregarProductoError = (error) => ({
  type: AGREGAR_PRODUCTO_ERROR,
  payload: error,
});
