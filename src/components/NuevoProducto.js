import { useDispatch, useSelector } from "react-redux";

//Actions de redux
import { crearNuevoProductoAction } from "../actions/productoActions";
import { useState } from "react";

const NuevoProducto = () => {
  //utilizar useDispact para acceder a la funcion dispatch
  const dispatch = useDispatch();

  //state del componente
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState(0);

  //mandar a llamar a la funcion de productoAction
  const agregarProducto = (producto) => dispatch(crearNuevoProductoAction(producto));

  //cuando el usuario haga sumbmit
  const submitNuevoProducto = (e) => {
    e.preventDefault();
    //validar formulario
    if (nombre.trim() === "" || precio <= 0) {
      alert("Ingrese todos los datos");
      return;
    }
    //si no hay errores

    //crear el nuevo producto
    agregarProducto({ nombre, precio });
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Agregar Nuevo Producto
            </h2>
            <form onSubmit={submitNuevoProducto}>
              <div className="form-group">
                <label className="control-label">Nombre Producto</label>
                <input
                  type="text"
                  className="form-control "
                  placeholder="Nombre Producto"
                  name="nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
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
                  onChange={(e) => setPrecio(Number(e.target.value))}
                />
              </div>
              <button
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                type="submit"
                name="submit"
              >
                Agregar Producto
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NuevoProducto;
