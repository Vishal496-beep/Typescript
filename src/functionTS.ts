function makingChai (name:string, price:number, cups:number){
        return `making tea for ${name} and number of cups are ${cups} total price is ${price}`
}

makingChai("masala", 5, 5)


function getPrice():number{   //at the end we define which value is it returnning
    return 23
}

function orderChai(order:string){
   if(!order) return null
   return order
}

function logChai():void{
   console.log("chai aur code")
}

// function chaiOrder(type?:string){
//     return console.log("hello")
// }

function chaiOrder(type:string = "masala"){
    return console.log("hello")
}

function createChai(order:{
    type:string,
    sugar:number,
    size: "small" | "large"
}):number{
    return 34
}