function getChai(kind) {
    if (kind === 'string') {
        return `making ${kind} chai...`;
    }
    return `chai order ${kind}`;
}
function servingChai(msg) {
    if (msg) {
        return `serving chai ${msg}`;
    }
    return `chai with default masala cookie`;
}
function orderChai(size) {
    if (size === 'small') {
        return `serving ${size} chai`;
    }
    if (size === 'medium' || size === 'large') {
        return `serving multiple chai`;
    }
    return `serving order #${size}`;
}
class KulhadChai {
    serving() {
        return `serving kulhad chai`;
    }
}
class cuttingChai {
    serving() {
        return `serving cutting chai`;
    }
}
function serving(chai) {
    if (chai instanceof KulhadChai) {
        return chai.serving();
    }
}
function isChaiOrder(obj) {
    return (typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number");
}
function servingChaiItem(item) {
    if (isChaiOrder(item)) {
        return `serving ${item.type} chai with ${item.sugar}`;
    }
    return `serving custom chai ${item}`;
}
function makeChai(order) {
    switch (order.type) {
        case "Ginger":
            return `your ginger tea is cooked`;
            break;
        case "Masala":
            return `your masala tea is arise`;
            break;
        case "elaichi":
            return `chai pijiye elaichi ki`;
            break;
    }
}
function brew(order) {
    if ("spicelevel" in order) {
        //
    }
}
export {};
//UNKNOWN =>
// function isArray(arr: unknown): arr is string[]{
// }
//# sourceMappingURL=typeNarrowing.js.map