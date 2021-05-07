let number =1;
while(number <=100){
    console.log(number);
    number++;
}

let price =2;
do{
    console.log(price);
    price++;
}while(price <=100);

for(let a =3; a <=100; a++){
    console.log(a);
}

let b =0;
while(b <5){
    if(b ===3){
        break;
    }
    console.log(b);
    b++;
}

let c =0;
while(c <5){
    if(c ===3){
        c++;
        continue;
    }
    console.log(c);
    c++;
}