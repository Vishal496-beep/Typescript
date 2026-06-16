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