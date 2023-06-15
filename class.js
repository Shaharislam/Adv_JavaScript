// const cookie = {
//     name: "Chocolate Chip",
//     isGlutenFree: false,
//     "+Yummy":true
// };

// cookie.name = "Rakibul Shahar";
// cookie.isGlutenFree = true;
// console.log(cookie["+Yummy"]);
// console.log(cookie);

class Cookie {
    constructor(name, isGlutenFree){
        this.name = name;
        this.isGlutenFree = isGlutenFree;
    }
    eatCookie(){
        console.log("I am Eating " + this.name);
    }
}

const myCookie = new Cookie("Ice Oatmeal", false);
console.log(myCookie.name);
console.log(myCookie["name"]);
console.log(myCookie.isGlutenFree);
myCookie.eatCookie();
