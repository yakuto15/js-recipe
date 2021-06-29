//button 要素とclick　イベント
// const alertMessage = function() {
//   alert("クリックしたね")
// }

// alertMessage() //アラートが表示される

// //イベントが発生する要素を取得する
// const button = document.getElementById("button"

// const alertMessage = function(){
//     alert("クリックしたね")
// }

// 関数を登録
// button.onclick = alertMessage

//イベントが発生する要素を追加する
// const button = document.getElementById("button")

// const alertMessage = function() {
//   alert("クリックしたね")
// }
// //関数を登録
// button.onclick = alertMessage

const button = document.getElementById("button")

const alertMessage = function() {
  alert("クリックしたね")
}
button.onclick = alertMessage()

//input 要素と input イベント
// const inputText = document.getElementById("input-text")
// const inputDate = document.getElementById("input-date")

// const sayHello = function() {
//   console.log("Hello")
// }
// inputText.oninput = sayHello
// inputDate.oninput = sayHello

// const logValue = function(e) {
//   console.log(e.target.value)
// }
// inputText.oninput = logValue
// inputDate.oninput = logValue

document.onkeydown = function(e) {
  console.log(e.key)
}
