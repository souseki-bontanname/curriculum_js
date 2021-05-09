class Taiyaki{
    constructor(nakami){
        this.nakami =nakami;
    }
    show(){
        console.log(`中身は${this.nakami}です`);
    }
}
let anko = new Taiyaki('あんこ');
let kuriam = new Taiyaki('クリーム');
let cheez = new Taiyaki('チーズ');

anko.show();
kuriam.show();
cheez.show();
