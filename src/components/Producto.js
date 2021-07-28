import { Link, useHistory } from "react-router-dom";
import {
  borrarProductoAction,
  obtenerProductoEditar,
} from "../actions/productoActions";

import React from "react";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";

const Producto = ({ producto }) => {
  const { nombre, precio, id } = producto;
  const dispatch = useDispatch();
  const history = useHistory();
  //Confirmar si desea eliminar el producto
  const confirmarElminarProducto = (id) => {
    //preguntar al usuario
    Swal.fire({
      title: "¿Esta seguro que desea eliminar este producto?",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Si, eliminar!",
      cancelButtonText: "No, cancelar!",
      closeOnConfirm: false,
      closeOnCancel: false,
    }).then((result) => {
      if (result.value) {
        dispatch(borrarProductoAction(id));
      }
    });
  };

  //funcion que redirije de forma programada
  const redireccionarEdicion = (producto) => {
    dispatch(obtenerProductoEditar(producto));
    history.push("/productos/editar/" + producto.id);
  };

  return (
    <tr>
      <td>{nombre}</td>
      <td>
        <span className="font-weight-bold">${precio}</span>
      </td>
      <td className="acciones">
        <button
          type="button"
          onClick={() => redireccionarEdicion(producto)}
          className="btn btn-primary mr-2"
        >
          Editar
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => confirmarElminarProducto(id)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default Producto;
