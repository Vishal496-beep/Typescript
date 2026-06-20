const chaiFlavour:string[] = ["masala", "adrak"]
const chaiPrice:number[] = [10,20,30,45]

const ratings: Array<number> = [3.4,5.5]

type chai = {
    name:string,
    price:number
}

const Menu: chai[] = [
    {name:"masala", price:20},
    {name:"adrak", price:10}

]

const cities: readonly string[] = ["delhi", "mumbai", "pitsburg"]  //we cannot add or change any property 
//cities.push("pune")
//two dimensional

const table: number[][] = [
    [1,2,3,4],
    [4,5,6,7]
]


//tuple  at the end it gives value in array
let chaiTuple: [string,number]; //order should remain like this 
chaiTuple = ["masala", 20]   //

let userInfo:[string, number, boolean?]
userInfo = [
    "manav",
    23, 
    true
]

//readonly tuples


const location: readonly [number, number] = [10.3, 346.6]

//named tuples
const chaiItem: [name: string, price:number] = ["masala", 23]



// Enums////////////////////////

enum CupsSize{
   SMALL,
   MEDIUM,
   LARGE
}

const size = CupsSize.SMALL
//if i define first value then other values will increase
enum status {
    PENDING = 100,
    NAME,  //101
    PRICE  //102
}

enum chaiType {
    MASALA = "masala",
    GINGER = "ginger"
}

function makeChai(type: chaiType){
    console.log(`make ${type} chai`)
}

makeChai(chaiType.MASALA)
// makeChai("masala")  we cant add it like this

//constants
const enum Sugars {
    LOW = 1,
    MWDIUM = 2,
    LARGE = 3
}

let t : [string, number] = ["masala", 23]
t.push("extra")