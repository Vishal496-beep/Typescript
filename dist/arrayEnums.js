const chaiFlavour = ["masala", "adrak"];
const chaiPrice = [10, 20, 30, 45];
const ratings = [3.4, 5.5];
const Menu = [
    { name: "masala", price: 20 },
    { name: "adrak", price: 10 }
];
const cities = ["delhi", "mumbai", "pitsburg"]; //we cannot add or change any property 
//cities.push("pune")
//two dimensional
const table = [
    [1, 2, 3, 4],
    [4, 5, 6, 7]
];
//tuple  at the end it gives value in array
let chaiTuple; //order should remain like this 
chaiTuple = ["masala", 20]; //
let userInfo;
userInfo = [
    "manav",
    23,
    true
];
//readonly tuples
const location = [10.3, 346.6];
//named tuples
const chaiItem = ["masala", 23];
// Enums////////////////////////
var CupsSize;
(function (CupsSize) {
    CupsSize[CupsSize["SMALL"] = 0] = "SMALL";
    CupsSize[CupsSize["MEDIUM"] = 1] = "MEDIUM";
    CupsSize[CupsSize["LARGE"] = 2] = "LARGE";
})(CupsSize || (CupsSize = {}));
const size = CupsSize.SMALL;
//if i define first value then other values will increase
var status;
(function (status) {
    status[status["PENDING"] = 100] = "PENDING";
    status[status["NAME"] = 101] = "NAME";
    status[status["PRICE"] = 102] = "PRICE"; //102
})(status || (status = {}));
var chaiType;
(function (chaiType) {
    chaiType["MASALA"] = "masala";
    chaiType["GINGER"] = "ginger";
})(chaiType || (chaiType = {}));
function makeChai(type) {
    console.log(`make ${type} chai`);
}
makeChai(chaiType.MASALA);
// makeChai("masala")  we cant add it like this
//constants
var Sugars;
(function (Sugars) {
    Sugars[Sugars["LOW"] = 1] = "LOW";
    Sugars[Sugars["MWDIUM"] = 2] = "MWDIUM";
    Sugars[Sugars["LARGE"] = 3] = "LARGE";
})(Sugars || (Sugars = {}));
let t = ["masala", 23];
t.push("extra");
export {};
//# sourceMappingURL=arrayEnums.js.map