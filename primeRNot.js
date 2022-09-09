
let num=78;
i=2;
found=0
while(i<=num/2)
{
  if(num%i===0)
  {
    found=1
    console.log(`${num} is Composite Number `)
    i=num;
  }
if(!found)
console.log(`${num} is Prime Number `)

}