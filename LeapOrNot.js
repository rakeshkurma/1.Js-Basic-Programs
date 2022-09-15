const prompt=require("prompt-sync")();
let year=prompt("Enter year ");

if(year%4===0)
console.log(`${year} is Leap Year`)
else
console.log(`${year} is not Leap year`)
