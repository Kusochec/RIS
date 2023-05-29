//Таблица умножения NxN размера указаного в пораметре
//multiplicationTable(3)  ->[[1,2,3],[2,4,6],[3,6,9]]

let arr = new Array();
let table = new Array();
let num = prompt("Введите число:  ")

function mult() {

    for (let i = 0; i < num; i++) {
        arr[i] = i+1;
        
      }
      console.log(arr);
  }

  mult();
  