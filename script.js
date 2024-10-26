
let marks = [
    [88, 32, 56, 79, 93],
    [65, 24, 71, 89, 99],
    [44, 76, 29, 81, 95],
]

for(i = 0; i<=2; i++){
    if(i == 0){
        console.log("Section A");
    }
    else if(i == 1){
        console.log("Section B");
    }
    else if(i ==2){
        console.log("Section C");
    }
    for(j = 0; j<=4; j++){
   
        if(marks [i][j] >=33){
            console.log(marks [i][j] + "=Pass");
        }
        else{
            console.log(marks [i][j] + "=Fail");
        }
    }
}


function sum(){
    let x = 1000;
    let y = 233;
    let result = x-y;
    console.log(result);
}

sum();