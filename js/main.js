let temp;
let opc;
let x, y;
const quest = () => { 
    opc = prompt(`Ingrese una opción para realizar la operacion que desea:
    1 - De Celsius a Fahrenheit.
    2 - De Fahrenheit a Celsius.
    ESC - Para salir. `);
    opc = opc.toLowerCase();
}
const datos = () => {
    temp = Number(prompt(`Ingrese la temperatura en ${x}:`));
    while(isNaN(temp)) {
        alert(`El dato ingresado no es un numero. Vuelva a intentar`);
        temp = Number(prompt(`Vuelva a ingresar la temperatura en ${x}:`));
    }
}
const celsiusFahrenheit = celsius => (celsius * 1.8) + 32;
const fahrenheitCelsius = fahrenheit => (fahrenheit - 32) / 1.8;

quest ();

while (opc != `esc`){
    switch (opc) {
        case `1`:
            x = `°C`;
            y = `°F`
            datos ();
            alert(`La conversion de ${temp}${x} a ${y} es: ` + celsiusFahrenheit(temp).toFixed(1) + y);
            break;

        case `2`:
            x = `°F`
            y = `°C`;
            datos ();
            alert(`La conversion de ${temp}${x} a ${y} es: ` + fahrenheitCelsius(temp).toFixed(1) + y);
            break;
        
        default:
            alert(`La opción ingresada no es valida. Vuelva a intentar.`);
            break;
    }
    quest ();
}