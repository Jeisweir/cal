document.addEventListener("keydown", function(event) {
    if (event.key === "Enter" && !event.shiftKey && !event.ctrlKey && !event.altKey && !event.metaKey) {
            // Establecer el foco en el siguiente campo numérico
            if (event.target === p1) {
                document.getElementById("p2").focus();
            } else if (event.target === p2) {
                document.getElementById("p3").focus();
            } else // Verificar si el evento se originó en uno de los campos de entrada
            if (event.target === p1 || event.target === p2 || event.target === p3) {
                event.preventDefault();
                button.click();
        }
    }
});

function limitInput(id) {
    let input = document.getElementById(id);
  
    input.addEventListener("keydown", function(event) {
      if (event.key === "e" || event.key === "E" || event.key === "+" || event.key === "-") {
        event.preventDefault();
      }
      if (input.value > 2 && event.key !== "Backspace" && event.key !== "Delete" && event.key !== "ArrowLeft" && event.key !== "ArrowRight") {
        event.preventDefault();
      }
    });
}

limitInput("p1");
limitInput("p2");
limitInput("p3");

function operation() {
    let p1 = parseFloat(document.getElementById("p1").value);
    let p2 = parseFloat(document.getElementById("p2").value);
    let p3 = parseFloat(document.getElementById("p3").value);
    let sus = p1 + p2 + p3;
    let result = sus / 3;
    let need = 10 - result;
    let button = document.querySelector("button");

    // Establecer el foco en el primer campo de entrada
   

    // Validar que los campos no estén vacíos
    if (isNaN(p1) || isNaN(p2) || isNaN(p3)) {
        // Mostrar un mensaje de error
        document.getElementById("result").innerHTML = "Por favor ingrese todas las notas";
        return;
    } else {
        if (result > 20) {
            document.getElementById("result").innerHTML = "Por favor ingrese notas válidas";
            return;
        }
        if (result >= 10) {
            if (result % 1 >= 0.5) {
                document.getElementById("result").innerHTML = "Aprobado, pasas con un <span class='result-number-g'>" + Math.ceil(result) + "</span>";
            } else {
                document.getElementById("result").innerHTML = "Aprobado, pasas con un <span class='result-number-g'>" + Math.floor(result) + "</span>";
            }
        } else {
            let message = "Reprobado, te quedas con un <span class='result-number-b'>" + result.toFixed(2) + "</span>.<br/>";
            if (need > 0) {
                message += "Te faltarían al menos <span class='result-number-g'>" + need.toFixed(2) + "</span> puntos para aprobar";
            }
            document.getElementById("result").innerHTML = message;
        }
    }
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}
