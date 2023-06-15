const cookie = {
    name: "Chocolate Chip",
    isGlutenFree: false,
    "+Yummy": true
};

cookie.name = "Chip Chocolate";
cookie.isGlutenFree = true;
console.log(cookie["+Yummy"]);
console.log(cookie);