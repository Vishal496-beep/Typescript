//generics are also templates like interface

function wrapInArray<T>(item:T):T[]{
    return [item]
}

wrapInArray("masala")
wrapInArray(43)
wrapInArray({flavour:"ginger"})


function pair<A, B>(a:A, b: B): [A,B]{
    return [a,b]  //we cannot do b,a because we defined our function where a,b are returned values
}

pair("masala", "ginger")
pair(23, "elaichi")
pair({
    flavour: "ginger", 
    sugar:4, 
    ingredients: "anythin"
}, 
{
    makeCHAI: "yeah", 
    color:"dark", 
    milk:true
})


//generic interface creation and usage

interface Boc<T>{  //define generic
    content:T
}

const numberBox:Boc<number> =  {content: 10}  //use generic we cannot use T we have to use datatypes always
const numberBoxString:Boc<string> =  {content: "10"}
const numberBoxgeneric:Boc<boolean> =  {content: false}


interface ApiResponse<T>{
    status:number,
    data:T
}

const res:ApiResponse<{flavour:string}> = {
    status:200,
    data:{flavour:"masala"}
}