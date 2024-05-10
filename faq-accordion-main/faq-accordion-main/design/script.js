const questions = document.querySelectorAll("#question");
const plus = document.querySelectorAll("#plus");
const minus = document.querySelectorAll("#minus");
const paragraph = document.querySelectorAll("#paragraph");

let pressCount = 0;

questions.forEach((question, index) => {
  question.addEventListener("click", () => {
    pressCount++;
    if (pressCount % 2 == 1) {
      plus[index].style.display = "none";
      paragraph[index].style.display = "block";
      minus[index].style.display = "block";
    }
    if (pressCount % 2 == 0) {
      pressCount = 0;
      plus[index].style.display = "block";
      minus[index].style.display = "none";
      paragraph[index].style.display = "none";
    }
  });
});
