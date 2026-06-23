let tea;
tea = {
    name: "masalachai",
    price: 20,
    isHot: true
};
let adrakChai = {
    name: "adrak wali chai",
    price: 20,
    ingredients: ["ginger", "tealeaves"]
};
let smallcup = { size: "200ml" };
let bigCup = { size: "400ml", material: "steel" };
smallcup = bigCup;
let coffee = { brewTime: 5, beans: "Arabica" };
let chaiCoffee = coffee;
let u1 = {
    username: "chaiaurcode",
    password: "1245"
};
const placeOrder = (order) => {
    console.log("all of it is required in required syntax", order);
};
placeOrder({ name: "adrak", quantity: 3 });
const chaiInfo = {
    name: "adrak",
    price: 34
};
export {};
//# sourceMappingURL=objectTS.js.map