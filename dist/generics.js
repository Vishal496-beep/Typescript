//generics are also templates like interface
function wrapInArray(item) {
    return [item];
}
wrapInArray("masala");
wrapInArray(43);
wrapInArray({ flavour: "ginger" });
function pair(a, b) {
    return [a, b]; //we cannot do b,a because we defined our function where a,b are returned values
}
pair("masala", "ginger");
pair(23, "elaichi");
pair({
    flavour: "ginger",
    sugar: 4,
    ingredients: "anythin"
}, {
    makeCHAI: "yeah",
    color: "dark",
    milk: true
});
const numberBox = { content: 10 }; //use generic we cannot use T we have to use datatypes always
const numberBoxString = { content: "10" };
const numberBoxgeneric = { content: false };
const res = {
    status: 200,
    data: { flavour: "masala" }
};
export {};
//# sourceMappingURL=generics.js.map