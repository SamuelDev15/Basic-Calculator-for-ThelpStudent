
const calculadora = {
  type : "casio",
  modelo : "2010",
  color : "rgb(180, 111, 54)"
}

function calculadoraAgregar(valor) {
  const display = document.getElementById("display");
  display.value += valor;
}

function borrar() {
  const display = document.getElementById("display");
  display.value = ""
}

function borrarUltimo() {
  const display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

function calcular() {
  const input = document.getElementById("display").value;
  const display = document.getElementById("display");
  try {
    // Crea una nueva función que devuelve el resultado de la expresión
    const result = Function('"use strict"; return (' + input + ')')();
    display.value = result;
  } catch {
    display.value = "Error";
  }
}

