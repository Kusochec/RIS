//v4 замена цыфр на соответствующие гласные буквы
let x = [118, 117, 120, 121, 117, 98, 122, 97, 120, 106, 104, 116, 113, 114, 113, 120, 106];
let y = [101, 121, 110, 113, 113, 103, 121, 121, 101, 107, 103];
function swich(num){
for (let i = 0; i < num.length; i++)
{

if(num[i] == 97){
num[i] = 'a';
}

else if(num[i] == 101){
    num[i] = 'e';
    }

    else if(num[i] == 105){
        num[i] = 'i';
        }
    
        else if(num[i] == 111){
            num[i] = 'o';
            }

            else if(num[i] == 117){
                num[i] = 'u';
                }

                else if(num[i] == 121){
                    num[i] = 'y';
                    }                            
}
console.log(num);
}

swich(y);





