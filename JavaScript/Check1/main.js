let numbers = [2,5,12,13,15,18,22];

function isEven(){
    let i =0;
while(i < numbers.length){
    if(numbers[i] % 2 !==0) {
        i++;
        continue;
    }
    console.log(numbers[i] +"は偶数です。");
    i++;
}
};
isEven();

class Car{
    constructor(gass,num){
        this.gass =gass;
        this.num =num;
    }
    getNumGass(){
        console.log(`ガソリンは${this.gass}です。ナンバーは${this.num}です。`);
    }
}
let Car1 = new Car(20.5,1234);
let Car2 = new Car(23.5,2468);
let Car3 = new Car(35,9999);

Car1.getNumGass();
Car2.getNumGass();
Car3.getNumGass();
