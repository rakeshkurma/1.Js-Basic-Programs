const prompt=require("prompt-sync")();
  let t=prompt("Enter C for Celsius F for fahrenheit ");

  let temp=prompt(`Enter Temperature in ${t} `);
  
  if(t==='C' || t=='c')
    console.log(" Temerature in fahrenheit is",temp*1.8)
  
  else
  console.log(" Temerature in celsius is",temp/1.8)
