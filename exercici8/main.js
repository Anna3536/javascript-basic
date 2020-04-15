function Calculadora(operador, valor1, valor2) {
    operador = document.getElementById("operador").value;
    valor1 = parseInt(document.getElementById("valor1").value);
    valor2 = parseInt(document.getElementById("valor2").value);
    let resultado;

    switch (operador) {
        case "+":
            resultado = suma();
            break;
        case "-":
            resultado = resta();
            break;
        case "*":
            resultado = multiplicacio();
            break;
        default:
            resultado = "Algo no està bien introducido";
    }

    document.getElementById("demo").innerHTML = "El resultado es:" + " " + resultado

    function suma() {
        let resultado2;
        resultado2 = valor1 + valor2;
        return resultado2;

    }


    function resta() {
        let resultado2;
        resultado2 = valor1 - valor2;
        return resultado2;

    }

    function multiplicacio() {
        let resultado2;
        resultado2 = valor1 * valor2;
        return resultado2;

    }





}