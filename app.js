// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

let fromDollarToYen = (dollar)=>{
    let eur = dollar / oneEuroIs.USD
    console.log("From dollar to yen" + eur * oneEuroIs.JPY)
    return Math.round(eur * oneEuroIs.JPY * 100) / 100
}

let fromEuroToDollar = (euro)=>{
    return euro * oneEuroIs.USD
}


let fromYenToPound = (yen)=>{
    let eur = yen / oneEuroIs.JPY
    console.log("From yen to pound" + eur * oneEuroIs.GBP)
    return Math.round(eur * oneEuroIs.GBP * 100) / 100
}

module.exports = {fromDollarToYen, fromEuroToDollar, fromYenToPound}