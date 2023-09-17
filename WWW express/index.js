const express = require('express')

 const app =  express()

 app.set('view engine', 'ejs') //подключения шаблонизатора пор1: двиготель пор2: сам шаблонизатор

 //Страница с прямым текстам
 /*app.get('/', (req, res) => { // отслеживани главной страници (URL адреса)
  res.send('Hello express js') // Что далжно быть отображено на главной странице
 })*/
 
 //страница с подклюеным файлом .html
 /*app.get('/', (req, res) => { 
    res.sendFile(__dirname + '/index.html') //Указали фаел для открытия на главную страницу
   }) //__dirname - это константа для получения полного пути к папке */

   //страница с денамическим url адресом 
 /*app.get('/user/:username/:id', (req, res) => { // Денамический адрес с пораметрами "username" и "id".
    // Она принемает эти пораметры от ползователя который введёт их адресную страку пример: "http://localhost:8080/Joni/233"
    res.send(`User ID: ${req.params.id}. Username: ${req.params.username}`) // обращение к деномическому пораметру "id" и "usrtname"
    // для вывода их на экран 
   })*/

   app.get('/', (req, res) => { 
    res.render('index') //Подключение папки через функцию шаблонизатора 
   // Для исползования этой функции тебуеться прерместить 
   //в папку "viws" index.html и переиминовать его в шindex.ejs
   })

   app.get('/about', (req, res) => { 
    res.render('about')
   })

   app.get('/user/:username', (req, res) => { 
    let data = {username: req.params.username, hobbis:['futboll', 'skate', 'Basketball']}//1) это объект со свойством 'username:' и значения этого свойства 'req.params.username'
      // 2) Массив данных hobbis:
    res.render('user', data) // Мы передали объекты username: и hobbis: странице "user"
   })
   
 const PORT = 8080 //порт в костанте

 app.listen (PORT, () =>{// создание самого сервера
    console.log(`Server started: http://localhost:${PORT}`) //собощение и ссылка на сайт
 })
