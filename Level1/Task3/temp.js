// Get input fields
const celsiusInput = document.getElementById('celcius');
const fahrenheitInput = document.getElementById('Fahrenheit');
const kelvinInput = document.getElementById('kelvin');

// Function to round values to 2 decimal places
function roundTemp(value) {
    return Math.round(value * 100) / 100;
}

// Convert from Celsius
celsiusInput.addEventListener('input', () => {
    const c = parseFloat(celsiusInput.value);
    if (!isNaN(c)) {
        fahrenheitInput.value = roundTemp((c * 9/5) + 32);
        kelvinInput.value = roundTemp(c + 273.15);
    } else {
        
        fahrenheitInput.value = '';
        kelvinInput.value = '';
    }
});

// Convert from Fahrenheit
fahrenheitInput.addEventListener('input', () => {
    const f = parseFloat(fahrenheitInput.value);
    if (!isNaN(f)) {
        const c = (f - 32) * 5/9;
        celsiusInput.value = roundTemp(c);
        kelvinInput.value = roundTemp(c + 273.15);
    } else {
        celsiusInput.value = '';
        kelvinInput.value = '';
    }
});

// Convert from Kelvin
kelvinInput.addEventListener('input', () => {
    const k = parseFloat(kelvinInput.value);
    if (!isNaN(k)) {
        const c = k - 273.15;
        celsiusInput.value = roundTemp(c);
        fahrenheitInput.value = roundTemp((c * 9/5) + 32);
    } else {
        celsiusInput.value = '';
        fahrenheitInput.value = '';
    }
});
