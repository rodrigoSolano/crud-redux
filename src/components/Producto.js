import { Link } from "react-router-dom";
import React from "react";
import Swal from "sweetalert2";
import { borrarProductoAction } from "../actions/productoActions";
import { useDispatch } from "react-redux";

const Producto = ({ producto }) => {
  const { nombre, precio, id } = producto;
  const dispatch = useDispatch();
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

  return (
    <tr>
      <td>{nombre}</td>
      <td>
        <span className="font-weight-bold">${precio}</span>
      </td>
      <td className="acciones">
        <Link to={`/productos/editar/${id}`} className="btn btn-primary mr-2">
          Editar
        </Link>
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
