const display = document.getElementById("display")
const ZeroButton = document.getElementById("zero-button")
const OneButton = document.getElementById("one-button")
const TwoButton = document.getElementById("two-button")
const ThreeButton = document.getElementById("three-button")
const FourButton = document.getElementById("four-button")
const FiveButton = document.getElementById("five-button")
const SixButton = document.getElementById("six-button")
const SevenButton = document.getElementById("seven-button")
const EightButton = document.getElementById("eight-buttton")
const NineButton = document.getElementById("seven-button")
const PlusButton = document.getElementById("plus-button")
const MinusButton = document.getElementById("minus-button")
const MultopliedButton = document.getElementById("multiplied-button")

//ボタンをクリックしたときの処理を登録
// plusButton.onclick = function() {
//   ここにクリック後の処理を書く
// }
let count = 0
//ボタン要素のonclickハンドラに関数を代入する
plusButton.onclick = function() {
  //countを更新
  count += 1
  //countを表示
  display.textContent = count
}

minusButton.onclick = function() {
  count -= 1
  display.textContent = count
}

multipliedButton.onclick = function() {
  count * count
  display.textContent = count
}
