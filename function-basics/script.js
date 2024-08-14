function add7(number){
    return number+7;
}

let multiply = (n1,n2) => n1*n2;

let capitalize = function(string) {
    return string.slice(0,1).toUpperCase() + string.slice(1).toLowerCase();
};

function lastLetter(string) {
    return string.slice(-1);
}

console.log("15 + 7 = " + add7(15));

console.log("7*15 = " + multiply(7,15));

console.log("'aBcD' capitalized is " + capitalize('aBcD'))

console.log("The last letter of 'abcd' is " + lastLetter('abcd'))