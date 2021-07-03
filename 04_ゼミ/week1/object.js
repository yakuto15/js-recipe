const Yakuto = {
  name: "やくと",
  university: "法政大学",
  live: "横浜",
  age: 20,
  hobby: ["野球", "カラオケ"],
  familly: {
    father: "晃",
    mother: "広美",
    brother: "慶二郎",
  },
  student: true,
  sayHello: function() {
    alert(`こんにちは${this.name}です!!`)
  },
}

console.log("動いてる？")

const FizBuzz = function(number) {
  for (let n = 1; n <= number; n++) {
    if (n % 15 === 0) {
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
FizBuzz(100)
