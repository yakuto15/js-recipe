const imageElement = document.getElementById("dog-image")
const changePicture = document.getElementById("change-picture")

changePicture.onclick = function() {
  //指定したサーバーにデータを取りに行く
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => {
      return res.json() //結果をjsonとして読み込んで、次のthenに渡す
    })
    .then((data) => {
      imageElement.src = da
      ta.message //画像を表示する
    })
}
