"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const greet = (name) => {
    return `Hello, ${name}!`;
};
console.log(greet("XO To UR Lif3"));
function formatData(data) {
    if (typeof data === "string") {
        return data.toUpperCase();
    }
    else {
        return data.toFixed(2);
    }
}
function toUserPreview(user) {
    return {
        id: user.id,
        name: user.name
    };
}
const user1 = {
    id: 1,
    name: "John Doe",
    email: "xxxxx.com",
    age: 30,
    value: 100
};
const user2 = {
    id: 1,
    name: "John Doe"
};
// this cant be used, we should restructure if we want to use it directly
const userPreview = toUserPreview(user1);
console.log(formatData(user1.name));
console.log(formatData(user1.value));
console.log(user1);
console.log(userPreview);
//# sourceMappingURL=index.js.map