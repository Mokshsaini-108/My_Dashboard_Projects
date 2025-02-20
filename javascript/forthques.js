//4️⃣ Nested if-else:

// एक व्यक्ति की उम्र (age) input लो और check करो:
// 0-12 → "बच्चा"
// 13-19 → "किशोर"
// 20-59 → "वयस्क"
// 60+ → "बुजुर्ग"

// let age = 19;
// if (age < 0) 
// {
//   console.log("Age is invalid");
// } else 
// {
//   if (age >= 60) {
//     if (age > 100) {
//       console.log("Sorry! Age cannot not greater than 100");
//     } else {
//       console.log("This is a old person");
//     }
//   } else if (age < 60 && age >= 20) {
//     console.log("This is a adult guy");
//   } else if (age < 20 && age >= 13) {
//     console.log("This is a teenager guy");
//   }  else {
//     console.log("This person is child");
//   }
// }


let age = 21;

if (age < 0) {
  console.log("Age is invalid");
} else if (age > 100) {
  console.log("Sorry! Age cannot be greater than 100");
} else if (age >= 60) {
  console.log("This person is elderly");
} else if (age >= 20) {
  console.log("This person is an adult");
} else if (age >= 13) {
  console.log("This person is a teenager");
} else {
  console.log("This person is a child");
}
