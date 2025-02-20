let a=parseFloat(prompt("Enter first value"));
let b=parseFloat(prompt("Enter second value"));
let choice=prompt("Enter the operation");
let Result;
switch (choice){
    case "+":
        Result=a+b;
        break;
    case "-":
        Result=a-b;
        break;
    case "*":
        Result=a*b;
        break;
    case "/":
        Result=a/b;
        break;
    case "%":
        Result=a%b;
        break;
}
if(Result==undefined || Result==null || Result==NaN)
{
    console.log("Invalid Input");
}
else{
    console.log(`The Result of A and B is:-${Result}`);
}