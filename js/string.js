// strings declaration
console.log("Developer Robert");
let a = "Developer";
console.log(a);

// string conact
const firstname = "Robert";
const lastname = "NIYITANGA";
console.log(firstname + "" + lastname);

// string characters
console.log(firstname[0]);
// string length
console.log(firstname.length);
// string methods

let upper = a.toUpperCase();
let lower = a.toLowerCase();
let LAST = a.lastIndexOf("l");
let slic = a.slice(2, 4);
let sub = a.substr(2, 4);

// console.log(upper, lower, LAST, slic, sub);
let html = `
<p>Developer ${a} robert</p>
`;
console.log(html);
