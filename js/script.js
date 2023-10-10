

let celcius = prompt("Ingresa la temperatura en celcius: ")



if (!isNaN(celcius)) {
    let farenheit = (celcius * 9 / 5) + 32;
    let kelvin = parseFloat(celcius) + 273.15;
    alert("Grados Kelvin: " + kelvin);
    alert("Grados Fahrenheit: " + farenheit);
} else {
    alert("Solo se puede recibir datos tipo Number")
}