const display = document.getElementById("display")
const plusButton = document.getElementById("plus-button")
const downButton = document.getElementById("down-buttton")
const doubleButton = document.getElementById("double-button")

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

downButton.onclick = function() {
  count -= 1
  display.textContent = count
}

doubleButton.onclick = function() {
  count *= 2
  display.textContent = count
}
