document.getElementById('rojo').innerHTML = "Adiós";

document.getElementById('encabezado').style.color = "orange";

const encabezadoClic = document.getElementById("marrón")

encabezadoClic.addEventListener ("click", function() {
    encabezadoClic.style.color = "brown";
}); 

const encabezadoHover = document.getElementById("Hover")

encabezadoHover.addEventListener("mouseover", function() {
    encabezadoHover.innerText = "¡Sorpresa! El texto cambió.";
}); 

encabezadoHover.addEventListener("mouseout", function() {
    encabezadoHover.innerText = "Mírame de nuevo";
});