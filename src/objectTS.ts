let tea: {
    name:string,
    price:number,
    isHot:boolean
}

tea = {
    name:"masalachai",
    price: 20,
    isHot: true
}


type Tea = {
    name:string,
    price:number,
    ingredients:string[]
}

let adrakChai:Tea = {
    name:"adrak wali chai",
    price: 20,
    ingredients: ["ginger", "tealeaves"]
}

//duck typing
type Cup = {size:string}
let smallcup:Cup = {size:"200ml"}
let bigCup = {size:"400ml", material:"steel"}
smallcup = bigCup


type Brew = {brewTime:number}
let coffee = {brewTime: 5, beans : "Arabica"}
let chaiCoffee:Brew = coffee


type User = {
    username:string,
    password: string
}

let u1:User = {
    username: "chaiaurcode",
    password: "1245"
}


type item = {name:string, quantity:number}
type address = {street: string, pin:number}


type Order = {
    id: string,
    item: item[],
    address: address
}


// partial  => makes using datatypes optional
// type Chai = {
//     name: string,
//     price: number,
//     isHot: boolean
// }

// const updatedChai = (update:Partial <Chai>) => {
//     console.log("update chai", update)
// }

// updatedChai({price:23})
// updatedChai({isHot:false})
// updatedChai({})  //it creates issues


//required => all fields would be required
type chaiOrder = {
    name?:string,
    quantity?:number
}

const placeOrder = (order: Required <chaiOrder>) => {
    console.log("all of it is required in required syntax", order)
}

placeOrder({name: "adrak", quantity: 3})


type Chai = {
    name:string,
    price:number,
    isHot:boolean,
    ingredients:string[]
}

type basicChaiInfo = Pick<Chai, "name" | "price">

const chaiInfo:basicChaiInfo = {
    name:"adrak",
    price: 34
}

type chaiNew = {
    name:string,
    price:number,
    isHot:boolean,
    secretIngredients:string[]
}

type publicChai = Omit<chaiNew, "secretIngredients">