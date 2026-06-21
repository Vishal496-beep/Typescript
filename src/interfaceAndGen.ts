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