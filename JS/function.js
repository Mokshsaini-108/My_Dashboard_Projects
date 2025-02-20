// function sumoftwonumbers(a, b){
//     return a+b;
// }
// let result =sumoftwonumbers(31,29);
// console.log(result);

// let Animalprofile={
//     Name:"gimmy",
//     brand:["American","African","Nepali","Indian"],
//     voice: function(name) {
//         console.log("bark....bark");
//         console.log(`bao....bao.....baaaaaaooooo.....${name}`);
//     },
// };
// // console.log(Animalprofile.brand);
// console.log(Animalprofile.voice("pooja"));

function arithmeticOperator(a, b, operation) {
  switch (operation) {
    case "+":
      console.log("Addition Done");
      return a + b;

    case "-":
      console.log("Subtraction done");
      return a - b;
  }
}

let dogProfile={
    name:"gimmy",
    brand:["bully","pitbull","German shephred"],
    voice: function(haddi){
        console.log("BARK.....BARK.....");
        console.log(`bao...bao...baaaooooo... ${haddi}`);
    }
}
let result = arithmeticOperator(5, 10, "-");
console.log(result);
console.log(dogProfile.voice("My chicken leg piece"));
