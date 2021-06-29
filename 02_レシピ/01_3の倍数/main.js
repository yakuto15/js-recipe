// const number = 24

// for (let n = 1; n <= number; n++) {
//   if (number % 3 === 0) {
//     console.log(number + "!!!!!!!")
//   } else {
//     console.log(number)
//   }
// }

//引数numberを受け取る関数

const genkiFunction = function(number) {
  //nを1から、numberまで、値を1ずつ増やしながらforno{}の中身を繰り返す
  for (let n = 1; n <= number; n++) {
    if (n % 3 === 0) {
      console.log(`${n}!!!!!!!`)
    } else {
      console.log(n)
    }
  }
}

const FizzBuzz = function(number) {
  for (let n = 1; n <= number; n++) {
    if (n % 3 === 0 && n % 5 === 0) {
      console.log("FizzBuzz")
    } else if (n % 5 === 0) {
      console.log("Buzz")
    } else if (n % 3 === 0) {
      console.log("Fizz")
    } else {
      console.log(n)
    }
  }
}
