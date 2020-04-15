function Calculadora(operador, valor1, valor2) {
    operador = document.getElementById("operador").value;
    valor1 = parseInt(document.getElementById("valor1").value);
    valor2 = parseInt(document.getElementById("valor2").value);
    let resultado;

    switch (operador) {
        case "+":
            resultado = valor1 + valor2;
            break;
        case "-":
            resultado = valor1 - valor2;
            break;
        case "*":
            resultado = valor1 * valor2;
            break;
        default:
            resultado = "Algo no està bien introducido";
    }

    document.getElementById("demo").innerHTML = "El resultado es:" + " " + resultado;






}