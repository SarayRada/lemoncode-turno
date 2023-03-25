import "./style.css";

function reset () : void {
        document.getElementById("turno-actual")!.innerHTML = "00"
}

function añadirNumero () {
    const numeroActual = document.getElementById("turno-actual");
    let proximoNumero = parseInt(numeroActual!!.innerHTML) + 1;
    const numeroFormateado : string = proximoNumero.toString().padStart(2, "0");

    document.getElementById("turno-actual")!.innerHTML = numeroFormateado;
}

function quitarNumero () {
    const numeroActual = document.getElementById("turno-actual");
    let numeroAnterior = parseInt(numeroActual!!.innerHTML) - 1;
    if (numeroAnterior > 0){
        const numeroFormateado = numeroAnterior.toString().padStart(2, "0");
        document.getElementById("turno-actual")!.innerHTML = numeroFormateado;
    } else {
        document.getElementById("turno-actual")!.innerHTML = "00"
    }
}

function cambiarNumero () {
    const numeroElegido =(<HTMLInputElement>document.getElementById("elegir-numero")!).value;
    const numero = parseInt(numeroElegido);
    const numeroFormateado = numero.toString().padStart(2, "0");

    document.getElementById("turno-actual")!.innerHTML = numeroFormateado;
}

const resetTurno = document.getElementById("reset")!;
const turnoSiguiente = document.getElementById("turno-siguiente")!;
const turnoAnterior = document.getElementById("turno-anterior")!;
const cambarTurno = document.getElementById("elegir-turno")!;

resetTurno.addEventListener("click", reset);
turnoSiguiente.addEventListener("click", añadirNumero);
turnoAnterior.addEventListener("click", quitarNumero);
cambarTurno.addEventListener("click", cambiarNumero);