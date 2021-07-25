//crear el state de productos
const initialState = {
  productos: [],
  loading: false,
  errorMessage: "",
  error: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
