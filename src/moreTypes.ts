let response:any = "42";

let numericLength:number = (response as string).length  // it is forcefull type ascertion

type book = {
    name:string
}

let bookName = '{"name":"who moved my cheese"}'

let bookObject = JSON.parse(bookName) as book

console.log(bookObject)


let inputElement = document.getElementById("username") as HTMLInputElement


let value:any;
value = "chaicode"
value = [1,2,3,4]
value = 2.4
value.toUpperCase()

let newValue:unknown;
newValue = "chaicode"
newValue = [1,2,3,4]
newValue = 2.4

if(typeof newValue === "string"){
    newValue.toUpperCase()
}

try {
    
} catch (error) {
    if(error instanceof Error){
        console.log(error.message)
    }
    console.log("error", error)
}

const data:unknown = "chai aur code"
const dataType:string = data as string

type Role = "admin" | "user" //| "superAdmin"

function redirectInRole(role:Role): void {
    if(role === "admin"){
        console.log("Redirecting to admin dashboard")
        return
    }

    if(role === "user"){
         console.log("Redirecting to user dashboard")
         return
    }
    role; //hoverit
}

function neverReturn():never{
    while(true){
        
    }
}