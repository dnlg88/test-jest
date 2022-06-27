test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("One dollar should be 373.04 yen", function(){
    //import the function from app.js
    const { fromDollarToYen } = require('./app.js')
    
    // this is the comparison for the unit test
     expect(fromDollarToYen(3.5)).toBe(373.04); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("One yen should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromYenToPound } = require('./app.js')
    // this is the comparison for the unit test
     expect(fromYenToPound(3.5)).toBe(0.02); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})