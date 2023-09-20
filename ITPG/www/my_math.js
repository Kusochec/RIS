//пример собственного модуля для потключения как обычные встроеные модули
const add = (a, b) =>{ //<--Эту функцию add
    return  a + b
}



module.exports = { //функция экспортирования модулей для использования их в других файлах.js
    add: add, //либо по названию add экспортированть функцию add
    minus: (a, b) =>{ //можно по названию minus экспортировать нейкую функцию
        return  a - b
}

}