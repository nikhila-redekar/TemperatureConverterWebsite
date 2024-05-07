// Fahrenheit to Celsius conversion
function onConvertToFahrenheitClicked() {
    const temperatureInput = document.getElementById("temperatureInput").value;
    if (!isNaN(temperatureInput)) {
        const fahrenheit = parseFloat(temperatureInput);
        const celsius = (fahrenheit - 32) * 5 / 9;
        document.getElementById("output").textContent = "Result: " + celsius.toFixed(2) + "°C";
    } else {
        alert("Please enter a valid temperature.");
    }
}

// Celsius to Fahrenheit conversion
function onConvertToCelsiusClicked() {
    const temperatureInput = document.getElementById("temperatureInput").value;
    if (!isNaN(temperatureInput)) {
        const celsius = parseFloat(temperatureInput);
        const fahrenheit = (celsius * 9 / 5) + 32;
        document.getElementById("output").textContent = "Result: " + fahrenheit.toFixed(2) + "°F";
    } else {
        alert("Please enter a valid temperature.");
    }
}

window.onload = function() {
    const convertBtn = document.getElementById("convertBtn");
    const resetBtn = document.getElementById("resetBtn");

    if (window.location.pathname === "/f-to-c.html") {
        convertBtn.onclick = onConvertToFahrenheitClicked;
    } else if (window.location.pathname === "/c-to-f.html") {
        convertBtn.onclick = onConvertToCelsiusClicked;
    }

    resetBtn.onclick = function() {
        document.getElementById("temperatureInput").value = "";
        document.getElementById("output").textContent = "";
    };
};
