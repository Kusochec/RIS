/*let num = 5
console.log (`variable: ${num}`); //кавычка находиться на букве ё*/


const CC = require('currency-converter-lt');
let currencyConverter = new CC({from:"USD", to:"BYN", amount:1})

currencyConverter.convert().then((response) => {
    console.log (`Resualt: ${response}`)
})


/*const os =require('os')
let res = os.platform()
console.log(res)*/
