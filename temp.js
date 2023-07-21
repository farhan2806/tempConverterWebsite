function convertToFahrenheit() {
    var celsius = document.getElementById("celsiusInput").value;
    var fahrenheit = (celsius * 9 / 5) + 32;
    document.getElementById("farhenInput").value = fahrenheit.toFixed(2);
    document.getElementById("resultText").textContent = celsius + "°C is equal to " + fahrenheit.toFixed(2) + "°F";
}

function convertToCelsius() {
    var fahrenheit = document.getElementById("farhenInput").value;
    var celsius = (fahrenheit - 32) * 5 / 9;
    document.getElementById("celsiusInput").value = celsius.toFixed(2);
    document.getElementById("resultText").textContent = fahrenheit + "°F is equal to " + celsius.toFixed(2) + "°C";
}