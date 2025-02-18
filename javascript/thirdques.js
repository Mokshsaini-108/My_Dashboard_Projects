//3️⃣ Logical Operators:

// तीन numbers (x, y, z) लो और check करो कि क्या x सबसे बड़ा number है? (Hint: Use logical AND &&)

let x = 10;
let y = 38;
let z = 6;
// console.log(x>y && x>z);
if (x > y && x > z) {
  console.log("x is the largest number");
} 
else if (y > x && y > z) {
  console.log("y is the largest number");
} 
else {
  console.log("z is the largest number");
}
