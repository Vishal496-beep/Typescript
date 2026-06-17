type chaiOrder = {
   type:string; 
   sugar:number; 
   strong:boolean
}


function makeChai(order: chaiOrder){
    console.log(order)
}

function serveChai(order:chaiOrder){
   console.log(order)
}

//we should mostly use interface intead of type when we create a class


//interface creation
// interface TeaRecipe {
//     water:number;
//     milk:number
// }
type TeaRecipe = {
    water:number;
    milk:number
}


class MasalaChai implements TeaRecipe{
    water = 100;
    milk = 50
}


interface cupSize {
    size:"small" | "large"
}

class chao implements cupSize {
   size: "small" | "large" = "large"
}

type teatype = "masala" | "ginger" | "elaichi"

function chaiType(t:teatype) {
    console.log(t)
}