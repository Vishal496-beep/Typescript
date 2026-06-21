// class Chai {
//     flavour:string,
//     price:number

//     // constructor (flavour:string, price:number){
//     //      this.flavour = flavour,
//     //      this.price = price
//     // }

//      constructor (flavour:string){
//          this.flavour = flavour,
//          console.log(this)
//     }

// }

// const masalaChai = new Chai("masala", 20)
// masalaChai.flavour = "ginger"


class Chai {
    public flavour = "masala"
   
    private secretIngredients = "cardemom"

    reveal(){
        this.secretIngredients //ok
    }
    
}

class Shop {   
    protected shopName = "chai corner"
}

class Branch extends Shop {
    getName(){
        return this.shopName //ok
    }
}

new Branch().getName()


class Walet {
    #balance = 100  //using # it became private
     
    getBalance(){
        return this.#balance
    }
}

const balance = new Walet()

const c = new Chai()
// c.reveal()


class Cup {
    readonly capacity:number = 250

    constructor(capacity: number){
      this.capacity = capacity
    }
}

//getters and setters

class ModernChai {
    private _sugar = 2
//to get a value
    get sugar(){
        return this._sugar 
    }
//to set a value
    set sugar(value:number){
       if(value > 5) throw new Error("too much sugar")
        this._sugar = value
    }
}

const chai = new ModernChai()
console.log(chai)
chai.sugar = 3

class EkChai {
    static shopname = "chai aur coffe"

    constructor(public flavour: string){}
}

console.log(EkChai.shopname)

////////////////////
abstract class Drink {
    abstract make():void
}

class myChai extends Drink {
    make(){
     console.log("chai")
    }
}

//////////////composition

class Heater {
    heat(){}
}

class chaiMaker {
    constructor(private heater:Heater){}

    make (){
        this.heater.heat
    }
}