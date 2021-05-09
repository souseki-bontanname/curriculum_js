let scores =[10,15,20,25]
console.log(scores);
console.log(scores.length);
let i =0;
while(i < scores.length){
    if(i % 2 !==0) {
        i++;
        continue;
    }
    console.log(scores[i] +"は偶数です。");
    i++;
}

let car ={
    gass:20.5,
    num:1234,
};
console.log("ガソリンは"+car.gass+"です")
console.log("ナンバーは"+car.num+"です")