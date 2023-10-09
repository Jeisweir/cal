function operation(p1, p2, p3) {
    let sus = p1 + p2 + p3;
    let result = sus / 3;
    let need = 10 - result;
    if (result >= 10) {
        if (result % 1 >= 0.5) {
            console.log("Aprobado, pasas con un " + Math.ceil(result));
        } else {
            console.log("Aprobado, pasas con un " + Math.floor(result));
        }
    } else {
        console.log("Reprobado, te quedas con un " + result);
        console.log("Te faltarían al menos " + need + " puntos para aprobar");
    }
    console.log("Nota con decimal: " + result);
    console.log("Posible nota entera: " + Math.round(result));
    console.log("Suma de todos los cortes: " + sus);
    console.log("Nota mínima para aprobar: 10");
    console.log("Nota mínima para aprobar sumando todos los cortes: 30");
}

operation(0, 10, 11);