const images = ["cat_01.jpg", "cat_02.jpg", "cat_03.jpg", "cat_04.jpg"];
const chosenIndex = Math.floor(Math.random() * images.length)
const chosenImage = images[chosenIndex];

document.body.style.backgroundImage = `url('img/${chosenImage}')`;

if (chosenIndex <= 1) {
  document.body.style.color = '#000'; // 밝은 배경일 때 어두운 폰트 색상
} else {
  document.body.style.color = '#fff'; // 어두운 배경일 때 밝은 폰트 색상
}