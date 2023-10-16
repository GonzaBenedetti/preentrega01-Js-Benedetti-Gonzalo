let opc = prompt(`Ingrese una opción para realizar la operacion que desea:
    1 - De Celsius a Fahrenheit.
    2 - De Fahrenheit a Celsius.
    ESC - Para salir. `);

opc = opc.toLowerCase();
let temp;

let celsiusFahrenheit = celsius => (celsius * 1.8) + 32;
let fahrenheitCelsius = fahrenheit => (fahrenheit - 32) / 1.8;

while (opc != 'esc'){
    switch (opc) {
        case '1':
            temp = Number(prompt('Ingrese la temperatura en °C:'));
            alert(`La conversion de ${temp}°C a °F es: ` + celsiusFahrenheit(temp).toFixed(1) + `°F`);
            break;

        case '2':
            temp = Number(prompt('Ingrese la temperatura en °F:'));
            alert(`La conversion de ${temp}°F a °C es: ` + fahrenheitCelsius(temp).toFixed(1) + `°C`);
            break;
        
        default:
            alert(`La opción ingresada no es valida. Vuelva a intentar.`);
            break;
    }
    opc = prompt(`Ingrese otra opción para realizar la operacion que desea:
    1 - De Celsius a Fahrenheit.
    2 - De Fahrenheit a Celsius.
    ESC - Para salir. `);
    opc = opc.toLowerCase();
}