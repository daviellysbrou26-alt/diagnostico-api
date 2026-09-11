function f(a, b) {
  if (a > 0) {
    return a * b * 0.93;
  } else {
    return 0;
  }
}


function calcularTotalConDescuento(cantidad, precioUnitario) {
  const DESCUENTO = 0.07;

  if (cantidad <= 0) {
    return 0;
  }

  return cantidad * precioUnitario * (1 - DESCUENTO);
}