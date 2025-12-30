function volume_sphere() {
    // 1. Retrieve the radius value from the input field
    const radiusInput = document.getElementById('radius').value;
    const r = parseFloat(radiusInput);
    
    // 2. Select the output field where the volume will be displayed
    const volumeField = document.getElementById('volume');

    // 3. Validate the input: must be a number and non-negative
    if (isNaN(r) || r < 0) {
        volumeField.value = 'NaN';
        return;
    }

    // 4. Calculate the volume
    // Math.PI provides the value of π
    // Math.pow(r, 3) or r ** 3 calculates the radius cubed
    const volume = (4 / 3) * Math.PI * Math.pow(r, 3);

    // 5. Round to four decimal places and display
    volumeField.value = volume.toFixed(4);
}