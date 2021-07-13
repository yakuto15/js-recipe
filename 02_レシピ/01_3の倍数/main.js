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

//秒針
let count = 0
const countUp = function() {
  count += 1
  if (count % 3 === 0) {
    console.log(`${count}!!!!`)
  } else if (/3/.test(count)) {
    console.log(`${count}!!!!`)
  } else {
    console.log(count)
  }
}
const Seconds = function() {
  setInterval(countUp, 1000)
}
