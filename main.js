const cowsayjs = require ("cowsayjs");
console.log(cowsayjs.moo("can you see me?"));
const CC = require('currency-converter-lt');
let currencyConverter = new CC({from:"USD", to:"EUR", amount:100});
currencyConverter.convert().then((response)=>{
    console.log(response)
})
console.log(`Result: ${currencyConverter}`);


