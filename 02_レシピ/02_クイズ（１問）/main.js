const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
const choice1 = document.getElementById("choice-1")
const choice2 = document.getElementById("choice-2")
const choice3 = document.getElementById("choice-3")
const choice4 = document.getElementById("choice-4")
const feedback = document.getElementById("feedback")
//クイズの内容
const quiz = {
  text: "みずタイプのポケモンはどれでしょう",
  image: "pokemon.jpg",
  choices: [
    {
      text: "ヒトカゲ",
      feedback: "残念！ヒトカゲはほのおタイプだよ",
    },
    {
      text: "ゼニガメ",
      feedback: "正解！ゼニガメはみずタイプだね",
    },
    {
      text: "フシギダネ",
      feedback: "残念！フシギダネはくさタイプだよ",
    },
    {
      text: "ピカチュウ",
      feedback: "残念！ピカチュウはでんきタイプだよ",
    },
  ],
}

//quizを画面に表示する関数
const reloadQuiz = function() {
  //問題文を表示
  quizText.textContent = "Q." + quiz.text

  //画像を表示
  quizImage.src = "./images/" + quiz.image

  //選択肢（ボタン）の中身を表示
  choice1.textContent = quiz.choices[0].text
  choice2.textContent = quiz.choices[1].text
  choice3.textContent = quiz.choices[2].text
  choice4.textContent = quiz.choices[3].text
}

//choiseNumber番目の選択肢を選択
const choose = function(choiceNumber) {
  //フィードバックを表示
  feedback.textContent = quiz.choices[choiceNumber].feedback
}

choice1.onclick = function() {
  //0番目の選択肢を選択
  choose(0)
}

choice2.onclick = function() {
  //1番目の選択肢を選択
  choose(1)
}

choice3.onclick = function() {
  //2番目の選択肢を選択
  choose(2)
}

choice4.onclick = function() {
  //3番目の選択肢を選択
  choose(3)
}
//reloadQuiz感ずウを実行してクイズ画面に表示する
reloadQuiz()

// choice1.onclick = function(){
//     feedback.textContent = "残念！ゴリアテは、旧約聖書に登場するダビデに石で殺される巨人だよ。"
// }

// choice2.onclick = function(){
//     feedback.textContent = "残念！ゼニガメは、クサガメまたはニホンイシガメの幼体だよ。"
// }

// choice3.onclick = function(){
//     feedback.textContent = "正解！ガニメデは、木製の第三惑星だよ！"
// }

//正解を判定する
// const choose = function(choiseString) {
//   if (choice3.textContent === 0) {
//     feedback.textContent =
//       "残念！ゴリアテは、旧約聖書に登場するダビデに石で殺される巨人だよ。"
//   } else if (choiceString === 1) {
//     feedback.textContent =
//       "残念！ゼニガメは、クサガメまたはニホンイシガメの幼体だよ。"
//   } else if (choiceString === 2) {
//     feedback.textContent = "正解！ガニメデは、木星の第三惑星だよ！"
//   }
// }

// choice1.onclick = function() {
//   //ゴリアテを選択
//   choose(0)
// }
// choice2.onclick = function() {
//   //ゼニガメを選択
//   choose(1)
// }
// choice3.onclick = function() {
//   //ガニメデを選択
//   choose(2)
// }

// feedbackの内容
// const feedbacks = [
//   "残念！ゴリアテは、旧約聖書に登場するダビデに石で殺される巨人だよ。",
//   "残念！ゼニガメは、クサガメまたはニホンイシガメの幼体だよ。",
//   "正解！ガニメデは、木星の第三惑星だよ！",
// ]

// //正解を判定する
// const choose = function(choiceNumber) {
//   feedback.textContent = feedbacks[choiceNumber]
// }

// choice1.onclick = function() {
//   //0番目の選択肢を選択
//   choose(0)
// }

// choice2.onclick = function() {
//   //1番目の選択肢を選択
//   choose(1)
// }

// choice3.onclick = function() {
//   //2番目の選択肢を選択
//   choose(2)
// }
