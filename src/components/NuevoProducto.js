const NuevoProducto = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Agregar N uevo Producto
            </h2>
            <form>
              <div className="form-group">
                <label className="control-label">Nombre Producto</label>
                <input
                  type="text"
                  className="form-control "
                  placeholder="Nombre Producto"
                  name="nombre"
                />
              </div>
              <div className="form-group">
                <label className="control-label">Precio Producto</label>
                <input
                  type="number"
                  className="form-control "
                  placeholder="Precio Producto"
                  name="precio"
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
