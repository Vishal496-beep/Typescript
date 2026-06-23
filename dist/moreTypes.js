let response = "42";
let numericLength = response.length; // it is forcefull type ascertion
let bookName = '{"name":"who moved my cheese"}';
let bookObject = JSON.parse(bookName);
console.log(bookObject);
let inputElement = document.getElementById("username");
let value;
value = "chaicode";
value = [1, 2, 3, 4];
value = 2.4;
value.toUpperCase();
let newValue;
newValue = "chaicode";
newValue = [1, 2, 3, 4];
newValue = 2.4;
if (typeof newValue === "string") {
    newValue.toUpperCase();
}
try {
}
catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
    }
    console.log("error", error);
}
const data = "chai aur code";
const dataType = data;
function redirectInRole(role) {
    if (role === "admin") {
        console.log("Redirecting to admin dashboard");
        return;
    }
    if (role === "user") {
        console.log("Redirecting to user dashboard");
        return;
    }
    role; //hoverit
}
function neverReturn() {
    while (true) {
    }
}
export {};
//# sourceMappingURL=moreTypes.js.map