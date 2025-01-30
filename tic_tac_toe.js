let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let new_button = document.querySelector("#new");
let pop_up = document.querySelector("#pop-up");
let message = document.querySelector("#pop-up-msg");
let turn = true;
let count = 0;
const win = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn) {
      box.innerText = "O";
      box.style.color = "#192841";
      turn = false;
    } else {
      box.innerText = "X";
      box.style.color = "#4b0082 ";
      turn = true;
    }
    box.disabled = true;
    count++;
    let iswin = winner();
    if (count === 9 && !iswin) {
      draw();
    }
  });
});

const enable_buttons = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const disable_buttons = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const showWinner = (w) => {
  message.innerText = `Congratulations, Winner is Player ${w}`;
  pop_up.style.display = "block";
  disable_buttons();
};

const draw = () => {
  message.innerText = `Game was a Draw`;
  pop_up.style.display = "block";
  disable_buttons();
};

const winner = () => {
  for (let pattern of win) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;
    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        showWinner(pos1);
        return true;
      }
    }
  }
  return false;
};

const reset_game = () => {
  turn = true;
  count = 0;
  enable_buttons();
  pop_up.style.display = "none";
};

new_button.addEventListener("click", reset_game);
reset.addEventListener("click", reset_game);
