const prompt=require("prompt-sync")();
let num=prompt("Enter NUmber To find Factorial ");

sum=1;
temp=num;
while(temp>1)
{
    sum*=temp;
    temp--;
}


console.log(`factorial of ${num} is  ${sum}`);
