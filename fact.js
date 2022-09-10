
num=5;
sum=1;
temp=num;
while(temp>1)
{
    sum*=temp;
    temp--;
}


console.log(`factorial of ${num} is  ${sum}`);