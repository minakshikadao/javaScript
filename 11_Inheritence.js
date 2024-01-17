

class MotherCat{
    constructor(eyeColor, totallegs){
this.eyeColor = eyeColor;
this.totallegs = totallegs;
    }
    meowing(){
        console.log(`Cat is meowing`);
        console.log(`Eye color : ${this.eyeColor} and Total legs is : ${this.totallegs}`);
    }
}

class BabyCat extends MotherCat {
constructor(bodyColor,name, colorOfEye, legs){
    super(colorOfEye, legs);   
    this.bodyColor = bodyColor;
this.name = name;
}
meowing(){ //Method Overriding which Runtime Polymorphism
    console.log(`Baby Cat is meowing and asking for milk`);
    console.log(`Eye color : ${this.eyeColor} and Total legs is : ${this.totallegs}`);
    console.log(`Body color : ${this.bodyColor} and name is : ${this.name}`);
}
}
const kitty = new BabyCat("Brown", "Kitty", 'Grey', '4');
console.log(kitty);
kitty.meowing()



