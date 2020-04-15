function resultado_examen() {

    var nota_examen = document.getElementById("nota_examen").value;

    if (nota_examen < 5) {
        alert("Ooooh has suspendido el examen con un" + " " + nota_examen);

    } else {
        alert("Enhorabuena! Has aprovado el examen con un" + " " + nota_examen);
    }
}