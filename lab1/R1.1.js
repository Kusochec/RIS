
// "A": "1",
//  "E": "5",
//  "I": "9",
//  "O": "15",
// "U": "21",
// "Y": "25",
// l;jnfhj
let num = [1, 5, 9, 15, 21, 25, 10, 8, 26];



for (let i = 0; i < num.length; i++)
{

if(num[i] == 1){
num[i] = 'А';
}

else if(num[i] == 5){
    num[i] = 'Е';
    }

    else if(num[i] == 9){
        num[i] = 'I';
        }
    
        else if(num[i] == 15){
            num[i] = 'О';
            }

            else if(num[i] == 21){
                num[i] = 'U';
                }

                else if(num[i] == 25){
                    num[i] = 'Y';
                    }
                              
}
console.log(num);





