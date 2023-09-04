//Таблица умножения NxN размера указаного в пораметре
//multiplicationTable(3)  ->[[1,2,3],[2,4,6],[3,6,9]]




function multiplicationTable()
 {

  let table = "";
  let N = prompt("Введите число:  ")

      for(let x = 1; x <= N; x++)
      {

        for(let y = 1; y <= N; y++)
        {

            table += x*y + " ";

        }

        table += "\n";
      }

      console.log(table);
 }

 multiplicationTable();
  