const fs = require('fs');
const crypto = require('crypto');

function calculateHash() {
  
  const filePath = __dirname +'/filrs/fileToCalculateHashFor.txt';

  // Создание потока для чтения файла
  const readStream = fs.createReadStream(filePath);

  // Создание объекта хэширования SHA256
  const hash = crypto.createHash('sha256');

  // Обработчик события чтения из потока
  readStream.on('data', (data) => {
    // Обновление хэша с данными из файла
    hash.update(data);
  });

  // Обработчик завершения чтения файла
  readStream.on('end', () => {
    // Вычисление финального хэша в виде шестнадцатеричной строки
    const finalHash = hash.digest('hex');

    // Вывод хэша в консоль
    console.log(finalHash);
  });

  // Обработчик ошибок чтения файла
  readStream.on('error', (err) => {
    console.error('Error reading file:', err);
  });
}

// Вызов функции для вычисления хэша файла
calculateHash();