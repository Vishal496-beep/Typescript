let drink = "chai"

let cups = Math.random() > 0.5? 10:'5'

let channelName = "maxanime08"
// channelName = 1223    #this is type inference 

// type annotation
let chaiFlavour:string = "masala"
chaiFlavour = "ginger"

let airlineSeat: 'aisle' | 'middle' | 'window' = 'middle'

airlineSeat = 'window'


let orders = ['12', '20', '30', '50']

let currentOrder: string | undefined;

for(let order of orders){
   if(order === '30'){
    currentOrder = order
   }
   currentOrder = '11'
}

console.log(currentOrder)