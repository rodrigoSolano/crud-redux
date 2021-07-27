import { useDispatch, useSelector } from "react-redux";

import Producto from "./Producto";
import { obtenerProductosAction } from "../actions/productoActions";
import { useEffect } from "react";

const Productos = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    //Consultar la API
    const cargarProductos = () => dispatch(obtenerProductosAction());
    cargarProductos();
  }, []);

  //obtener el state
  const productos = useSelector((state) => state.productos.productos);
  const error = useSelector((state) => state.productos.error);
  const loading = useSelector((state) => state.productos.loading);

  return (
    <>
      <h2 className="text-center my-5">Listado de productos</h2>
      {error && (
        <p className="font-weight-bold alert alert-danger text-center mt-4">
          Hubo un error
        </p>
      )}

      {loading && <p className="text-center ">Cargando...</p>}
      <table className="table table-striped">
        <thead className="bg-primary table-dark">
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.length > 0 ? (
            productos.map((producto) => (
              <Producto producto={producto} key={producto.id} />
            ))
          ) : (
            <tr>
              <td colSpan="3">No hay productos</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default Productos;
