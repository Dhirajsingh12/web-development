function add(a, b){
    return a + b;
}
function sub(a, b){
    return a - b;
}
Module.export = {
    addfn: add,
    subfn: sub
};
const math = require("fs");
console.log("math",math);