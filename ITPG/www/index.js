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
/*const fs = require('fs')
//fs.mkdirSync('text-files') //сохздание папки 'text-files'*/

//Создание
/*const fs = require('fs')
fs.mkdir('text-files', () =>{
  fs.writeFile('./text-files/some.txt', 'Hello', () => {///создание файла 'some.txt'запись в него Hello
}) 
})*/

//Удоление
/*const fs = require('fs')
fs.unlink('./text-files/some.txt',() => { //Удалялка для файлов
    fs.rmdir('./text-files', () => { }) //Удалялка для папок
})*/


//Создание сервера 
const http = require ('http')
const fs = require('fs')

let server = http.createServer((req, res) => { //Cоздание сервера 
//"req"- запрос пользоватиля / "res" - ответ сервера
//Коды ответов Http
//Информационные 100 - 199
//Успешные 200 - 299
//Перенаправления 300 - 399
//Клиентские ошибки 400 - 499
//Серверные ошибки 500 - 599
res.writeHead(200,{'Content-Type': 'text/html; charset =utf-8'}) //Заголовки для страницы. Первый пораметр это Код ответа Http.
//Второй: Тип отаброжаемого контента (plain или html) c кодировкой utf-8
//res.end() //вывод информации на сираницу

if(req.url =='/')
fs.createReadStream ('./templates/index.html')// Считование информации в потоке данных
//Может считывать информацию по чючють тем самым постепенно подгружать страницу
.pipe(res) //Отправляет подгруженую иформацию на сервер

else if (req.url == '/about')
fs.createReadStream ('./templates/about.html').pipe(res)

else
fs.createReadStream ('./templates/error.html').pipe(res)
})

const PORT = 8080
const HOST = 'localhost' //вместа 'localhost' можно прописать 127.0.0.1

server.listen(PORT, HOST, ()=>{ 
console.log (`Сервер запущен: http://${HOST}:${PORT}`)    
})


