// Importar la función sum del archivo app.js
const { fromDollarToYen,
    fromEuroToDollar,
    fromYenToPound } = require('./app.js');

// Comienza tu primera prueba
test('converts 1 dollar to 146.26 yen', () => {
    
    let total = fromDollarToYen(1);
    expect(total).toBe(146.26168224299064);
});

test('converts 1 euro to 1.07 dollars', () => {
    
    let total = fromEuroToDollar(1);
    expect(total).toBe(1.07);
});

test('converts 1000 dollar to 5.559105431309905 yen', () => {
    
    let total = fromYenToPound(1000);
    expect(total).toBe(5.559105431309905);
});

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})