/*let num = 5
console.log (`variable: ${num}`); //кавычка находиться на букве ё*/
//нужно для вывода переменной всместе с текстом 

 //установка и использование модулей
/*const CC = require('currency-converter-lt');
let currencyConverter = new CC({from:"USD", to:"BYN", amount:1})

currencyConverter.convert().then((response) => {
    console.log (`Resualt: ${response}`)
})*/


// встроеные модули 
/*const os =require('os') 
let res = os.platform()
console.log(res)*/


//используем созданый нами модуль my_math
/*const my_math = require('./my_math') //вызываем с помощю указания путки к файлу "./"
let res1 = my_math.add (4, 5) // вызываем конкретную функцию и задаём пораметры
let res2 = my_math.minus (5, 7)
console.log(`res1: ${res1}, res2: ${res2}`)*/


//Работа с файлами
/*const fs = require('fs')
//функции СО словам "sync" на конце являются СИНХРОННЫМИ функциями 
//(пока первая функция не закончится последующие не начнуться)
let read = fs.readFileSync ('some.txt', 'utf-8') // эта функция читает фаел в кодеровке utf-8
console.log(read)
fs.writeFileSync ('some.txt', read + '\nhello World!') //эта функция отрывает фаел/удоляет содержимае/записывает информацию (hello world!)
*/

/*const fs = require('fs')
//функции БЕЗ словам "sync" на конце являются АСИНХРОННЫМИ функциями 
//(функция не дажидаясь окончания идёт выполнять следующие функции)
let read2 = fs.readFile('some.txt', 'utf-8', (err, data) =>{ // третий пораметр это "coll beack functia" которая срабатывает какда функция "fs.readFile" сработает
    fs.writeFile ('some.txt', data + '\nSome text',(err, data) => {
console.log('Всё сработало')
    }) 
}) */


//Работа с папками
const fs = require('fs')
//fs.mkdirSync('text-files')

fs.mkdir('text-files', () =>{
    
})

