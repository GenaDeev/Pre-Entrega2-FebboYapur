let montoImpuestos = 0;
// Cotización constante, en un futuro podria ser un fetch a una api
const cotizacion = 1000;

// Impuestos al dia de hoy en Argentina
const impuestos = [
  {
    name: "Ganancias",
    value: 0.3,
  },
  {
    name: "Impuesto Pais",
    value: 0.3,
  },
];

// Hilo principal
const form = () => {
  montoImpuestos = 0;
  alert("Vamos a calcular el precio final con impuestos de tu compra en USD!");
  const value = parseFloat(prompt("Ingresa el valor de tu compra en USD"));
  alert(calculate(value, cotizacion));
};

// Funcion que recibe el valor en USD y la cotizacion del dolar oficial y devuelve un string con el precio final en ARS con impuestos detallados
const calculate = (value, cotizacion) => {
  if (!value) {
    alert("Debes ingresar un valor");
    form();
  } else {
    impuestos.forEach((impuesto) => {
      montoImpuestos += cotizacion * impuesto.value;
    });
    const dolarTarjeta = cotizacion + montoImpuestos;
    const final = value * dolarTarjeta;

    return `
    El precio final con impuestos es de AR$${final.toFixed(2)}
    Impuestos:
    ${impuestos
      .map((impuesto) => impuesto.name + ": $" + impuesto.value * final)
      .join(", ")}
    `;
  }
};

form();