import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { editarProductoAction } from "../actions/productoActions";
import { useHistory } from "react-router";

const EditarProducto = () => {
  //nuevo state producto
  const [producto, guardarProducto] = useState({ nombre: "", precio: "" });

  const dispatch = useDispatch();
  const history = useHistory()
  const productoeditar = useSelector((state) => state.productos.productoeditar);

  //llenar el state automaticamente
  useEffect(() => {
    guardarProducto(productoeditar);
  }, [productoeditar]);

  //leer los datos del formulario
  const onChangeFormulario = (e) => {
    guardarProducto({ ...producto, [e.target.name]: e.target.value });
  };

  const { nombre, precio } = producto;

  const submitEditarProducto = (e) => {
    e.preventDefault();
    dispatch(editarProductoAction(producto));
    history.push("/")
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Editar Producto
            </h2>
            <form onSubmit={submitEditarProducto}>
              <div className="form-group">
                <label className="control-label">Nombre Producto</label>
                <input
                  type="text"
                  className="form-control "
                  placeholder="Nombre Producto"
                  name="nombre"
                  value={nombre}
                  onChange={onChangeFormulario}
                />
              </div>
              <div className="form-group">
                <label className="control-label">Precio Producto</label>
                <input
                  type="number"
                  className="form-control "
                  placeholder="Precio Producto"
                  name="precio"
                  value={precio}
                  onChange={onChangeFormulario}

                />
              </div>
              <button
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                type="submit"
                name="submit"
              >
                Guardar Producto
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditarProducto;
