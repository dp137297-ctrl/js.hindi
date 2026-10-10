const name = "durgesh--asus";
const lastname = "patil";
const fullname = name + " " + lastname;
const repono = 23;

console.log(`Hello my name is ${name} and I am the owner of this repo ${repono}`);
console.log(fullname);

const gameName = new String("GTA-vice city");
console.log(gameName[2]);
console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf("y"));

const newString = gameName.slice(-3, 3);
console.log(newString);

const substringString = gameName.substring(0, 3);
console.log(substringString);

const url = "https://durgesh.com%20bharat";
console.log(url.replace("%20", "--"));
console.log(url.includes("durgesh"));
console.log(url.split("?"));
console.log(gameName.split('-'));


