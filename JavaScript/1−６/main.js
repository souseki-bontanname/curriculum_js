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