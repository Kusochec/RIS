/*const { stdout } = process;
stdout.write('Node.js \n'); 
stdout.write('hello'); 
 == stdout.write принемает 
строку 'Node.js' и выводит её в консоль */

/*const {stdin, stdout} = process;
stdin.on('data', data => stdout.write(data));
//== метот .on() принемает параметры названия события 'data'
//и стрелочную функцию-обработки data => stdout.write(data) которое
//выводит в консоль переданые данные*/

/*const {stdout} = process;
process.on('exit', () => stdout.write ('Удачи в изучении node.js!'));
// программа запускаеться выводит сообщение и заканчиваеться*/

//пример работы stderr
/*const {stdin, stdout, stderr} = process;
process.on('exit', code => {
    if (code === 0){
        stdout.write('Всё в порядке')
    } else{
        stderr.write(`Что-то пошло не так. Программа завершилась с кодом ${code}`)
    }
});*/

/*console.log(process.argv.slice(2));*/ 
// это команда выводит на экран массив размером 2
// который был написан в консоли "node text 1 2 3"

//Выводит сообщение hello по флагу -m 
//node -m hello
/*const flagIndex = process.argv.indexOf('-y')
if (flagIndex !== -1) {
    const message = process.argv[flagIndex + 1];
    console.log(message);
}*/


/*function getValue(flag){//функция получающая флаг
    const flagIndex = process.argv.indexOf(flag);
    return flagIndex !== -1 ? process.argv[flagIndex + 1] : null;
}
const message = getValue('-m');//вызов функции
console.log(message); //выводит значение арумента флага*/

/*console.log(__dirname) //выводит путь к дериктории 
console.log(__filename)//выводит путь к дериктории + имя файла */

/*const path = require('path'); // подключение модулей
const fs = require('fs');
const os = require('os');*/
