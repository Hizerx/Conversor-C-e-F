const convertToCelsiusButton = document.getElementById('convert-to-celsius');
const convertToFahrenheitButton = document.getElementById('convert-to-fahrenheit');
const temperatureInput = document.getElementById('temperature-input');
const resultDiv = document.getElementById('result');

convertToCelsiusButton.addEventListener('click', () => {
    const temperature = parseFloat(temperatureInput.value);
    const celsius = (temperature - 32) * 5/9;
    resultDiv.textContent = `Resultado: ${celsius.toFixed(2)} °C`;
});

convertToFahrenheitButton.addEventListener('click', () => {
    const temperature = parseFloat(temperatureInput.value);
    const fahrenheit = (temperature * 9/5) + 32;
    resultDiv.textContent = `Resultado: ${fahrenheit.toFixed(2)} °F`;
});