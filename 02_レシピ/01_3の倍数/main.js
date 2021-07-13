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
  //設定する数までループ処理
  for (let n = 1; n <= number; n++) {
    //3の倍数と5の倍数両方当てはまるとき
    if (n % 3 === 0 && n % 5 === 0) {
      console.log("FizzBuzz")
      //5の倍数
    } else if (n % 5 === 0) {
      console.log("Buzz")
      //3の倍数
    } else if (n % 3 === 0) {
      console.log("Fizz")
    } else if (/3/.test(n)) {
      console.log("Fizz")
    } else {
      console.log(n)
    }
  }
}
