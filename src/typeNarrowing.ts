function getChai(kind:string | number){
   if(kind === 'string'){
    return `making ${kind} chai...`
   }
   return `chai order ${kind}`
}

function servingChai(msg? : string){
   if(msg){
    return `serving chai ${msg}`
   }

   return `chai with default masala cookie`
}

function orderChai(size:"small" | "medium" | "large" | number){
     if(size === 'small'){
        return `serving ${size} chai`
     }
     if(size === 'medium' || size === 'large'){
        return `serving multiple chai`
     }
     return `serving order #${size}`
}


class KulhadChai{
    serving(){
        return `serving kulhad chai`
    }
}

class cuttingChai{
    serving(){
        return `serving cutting chai`
    }
}

function serving(chai: KulhadChai | cuttingChai) {
    if(chai instanceof KulhadChai){
        return chai.serving()
    }
}


type chaiOrder = {
    type: string,
    sugar: number
}

function isChaiOrder(obj:any):obj is chaiOrder{
    return (
        typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number"
    )
}


function servingChaiItem(item: chaiOrder | string){
       if(isChaiOrder(item)){
        return `serving ${item.type} chai with ${item.sugar}`
       }

       return `serving custom chai ${item}`
}



type masalaChai = {type:"Masala"; spiceLevel:number}
type gingerChai = {type:"Ginger"; amount:number}
type elaichiChai = {type:"elaichi"; aroma:number}

type chai = masalaChai | gingerChai | elaichiChai


function makeChai(order:chai){
    switch (order.type) {
        case "Ginger":
            return `your ginger tea is cooked`
            break;
        case "Masala":
            return `your masala tea is arise`
            break
        case "elaichi":
            return `chai pijiye elaichi ki`
            break
    }
}

function brew(order:masalaChai | gingerChai){
    if("spicelevel" in order){
        //
    }
}

//UNKNOWN =>
// function isArray(arr: unknown): arr is string[]{
    
// }