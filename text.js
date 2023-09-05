/*const { stdout } = process;
stdout.write('Node.js \n'); 
stdout.write('hello'); 
 == stdout.write принемает 
строку 'Node.js' и выводит её в консоль */

/*const {stdin, stdout} = process;
stdin.on('data', data => stdout.write(data));
== метот .on() принемает параметры названия события 'data'
и стрелочную функцию-обработки data => stdout.write(data) которое
выводит в консоль переданые данные*/

const {stdout} = process;
process.on('exit', () => stdout.write ('Удачи в изучении node.js!'));