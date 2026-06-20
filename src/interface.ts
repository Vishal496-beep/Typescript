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


// class MasalaChai implements TeaRecipe{
//     water = 100;
//     milk = 50
// }


interface cupSize {
    size:"small" | "large"
}

class chao implements cupSize {
   size: "small" | "large" = "large"
}

type teatype = "masala" | "ginger" | "elaichi"  //these are also called literal types

function chaiType(t:teatype) {
    console.log(t)
}


type masala = {teaLeaves:number}
type Extra = {masala:number}

type MasalaChai = masala & Extra   // & meaning is when we want both of the values we cant miss one element addition 

const cup:MasalaChai = {
    teaLeaves : 3,
    masala : 1
}

type User = {
    username:string,
    bio?:string    //we use optional ? meaning here user can have a bio or not its upto his/her choice completely optional if they have it has to be optional
}

const u1:User = { username : "vishal" }
const u2:User = {username: "typescript", bio:"optional"}


type config = {
    readonly appName: string,   //we can only assign it once but after that we cant change it
    version:number
}

const conf:config = {
    appName: "masterji",
    version: 1
}


//conf.appName = "master"