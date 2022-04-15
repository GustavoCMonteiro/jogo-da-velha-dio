const box = document.querySelectorAll(".box");
console.log(box);
const player = document.querySelector(".player");
const winner = document.querySelector(".winner");
const button = document.querySelector(".botao");
let turn = true;

function checkWinner() {
  checkBox(0, 1, 2);
  checkBox(3, 4, 5);
  checkBox(6, 7, 8);
  checkBox(0, 3, 6);
  checkBox(1, 4, 7);
  checkBox(2, 5, 8);
  checkBox(0, 4, 8);
  checkBox(2, 4, 6);
}

function checkBox(box1, box2, box3) {
  if (
    box[box1].textContent != "-" &&
    box[box1].textContent == box[box2].textContent &&
    box[box2].textContent == box[box3].textContent
  ) {
    box[box1].classList.add("bgYellow");
    box[box2].classList.add("bgYellow");
    box[box3].classList.add("bgYellow");
    for (let i = 0; i < box.length; i++) {
      box[i].classList.remove("boxh");
    }
    if (!turn) {
      winner.textContent = "Vencedor: X";
    } else {
      winner.textContent = "Vencedor: O";
    }
  }
}

for (let i = 0; i < box.length; i++) {
  box[i].addEventListener("click", function () {
    if (winner.textContent != "Vencedor:") {
      return;
    }
    if (box[i].textContent !== "-") {
      return;
    }
    if (turn) {
      box[i].textContent = "X";
      box[i].classList.add("color");
      player.textContent = "Jogador: O";
      turn = false;
    } else {
      box[i].textContent = "O";
      box[i].classList.add("color");
      player.textContent = "Jogador: X";
      turn = true;
    }
    checkWinner();
  });
}

button.addEventListener("click", function (event) {
  event.preventDefault();

  for (let i = 0; i < box.length; i++) {
    box[i].textContent = "-";
    box[i].classList.remove("color");
    box[i].classList.remove("bgYellow");
    box[i].classList.add("boxh");
  }
  player.textContent = "Jogador: X";
  winner.textContent = "Vencedor:";
  turn = true;
});
