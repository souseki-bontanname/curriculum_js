class Human{
    constructor(name,height,weight,gender,age){
        this.name =name;
        this.height =height;
        this.weight =weight;
        this.gender =gender;
        this.age =age;
    }
    walk(){
        console.log(`身長${this.height}cm、体重${this.weight}kg、${this.name}という${this.gender}が歩きました`);
    }
}
let yamada = new Human('yamada',170,60,'男',30);
let suzuki = new Human('suzuki',180,70,'男',35);
yamada.walk();
console.log(suzuki.age);