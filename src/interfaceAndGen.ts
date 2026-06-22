interface Chai {
    flavour:string,
    sugar:number,
    milk?:boolean
}

const makeChai:Chai = {
    flavour: "ginger",
    sugar:2,
    milk: true
}

interface Shop {
  readonly id : number,
  name: string
}

const shopway:Shop = {id:1, name:"chai aur typing javascript hahahahaha"}
// shopway.id = 2  //id is readonly property we cannot change it


//usage in function
interface price {
    (price:number):number
}

const fnc:price = (p) => p*0.5

////
interface TeaMachine {
    start():void
    stop():void
}

const machine:TeaMachine = {
    start(){
        console.log("start")
    },

    stop(){
        console.log("stop")
    }

}


//index signature

interface chaiRatings {
    [flavour:string] : number
}

const ratings: chaiRatings = {
    masala: 4.5,
    ginger: 5
}

//here interfaces are merging

interface User {  //this one is coming from a library
    name:string 
}

interface User {   //this one we created
    age:number
}

const you : User = {   //it merged both and we need to add both value name and age otherwise it will give us an error
    name:"vishal",
    age:22
}

interface A {a:string}
interface B {b: string}

interface C extends A,B {}