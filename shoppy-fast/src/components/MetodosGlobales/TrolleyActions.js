export function agregarProducto(item, quantity, carrito) {
  const existingItem = carrito.find(el => el.item.id === item.id);
  if (existingItem) {
    const nuevoCarrito = carrito.map((el) => {
      if (el.item.id === item.id && el.quantity + quantity > 0) {
        return {
          item: {
            ...el.item
          },
          quantity: el.quantity + quantity,
        };
      }

      return el;
    });
    return nuevoCarrito;
  }
  else {
    return [...carrito, { item, quantity }];
  }
};
export function eliminarItem(id, carrito) {
  if (window.confirm("¿Seguro quieres eliminar este producto del carrito?")) {
    return carrito.filter((elemento) => elemento.item.id !== id);
  }
};