import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_ERROR,
  AGREGAR_PRODUCTO_EXITO,
  COMENZAR_DESCARGA_PRODUCTOS,
  COMENZAR_DESCARGA_PRODUCTOS_ERROR,
  COMENZAR_DESCARGA_PRODUCTOS_EXITO
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

//Funcion que descarga los productos de la API
export function obtenerProductosAction() {
  return async(dispatch) => {
    dispatch(descargarProductos());
    try {
      const response = await clienteAxios.get("/productos");
      dispatch(descargaProductosExitosa(response.data));
    }catch (error) {
      console.log(error);
      dispatch(descargaProductosError());
    }
  };
}

const descargarProductos = () => ({
  type: COMENZAR_DESCARGA_PRODUCTOS,
  payload:true,
});

const descargaProductosExitosa = (productos) => ({
  type: COMENZAR_DESCARGA_PRODUCTOS_EXITO,
  payload: productos,
});

const descargaProductosError = () => ({
  type: COMENZAR_DESCARGA_PRODUCTOS_ERROR,
  payload:true,
});