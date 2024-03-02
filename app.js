let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromDollarToYen = (dollar) => {
    return (dollar / oneEuroIs["USD"]) * oneEuroIs["JPY"];
}

const fromEuroToDollar = (euro) => {
    return euro * oneEuroIs["USD"];
}

const fromYenToPound = (yen) => {
    return (yen / oneEuroIs["JPY"]) * oneEuroIs["GBP"]
}
// Solo un registro en consola para nosotros
console.log(fromDollarToYen(1))
console.log(fromEuroToDollar(1))
console.log(fromYenToPound(1000))
// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = {
    fromDollarToYen,
    fromEuroToDollar,
    fromYenToPound
};


