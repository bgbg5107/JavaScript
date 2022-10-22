// 랜덤번호 지정
// 유저가 번호 입력, go라는 버튼 클릭
// 만약 유저가 랜덤번호를 맞추면 딩동댕!
// 랜덤번호 < 유저번호 down
// 랜덤번호 > 유저번호 up
// reset 누르면 게임 리셋
// 5번의 기회를 다쓰면 게임오버 (더이상 추측불가, 버튼 disable)
// 범위벗어난 수 입력시 알려주기, 기회 깎지않음
// 입력한 숫자 입력하면 알려주기, 기회 깎지않음

let computerNum = 0;
let checkBtn = document.getElementById("checkbtn");
let inputNum = document.getElementById("inputnum");
let resultCheck = document.getElementById("resultcheck");
let chances = document.getElementById("chance");
let resetBtn = document.getElementById("resetbtn");

checkBtn.addEventListener("click", play);
resetBtn.addEventListener("click", reset);
inputNum.addEventListener("focus", focusInput);

let chance = 5;
let numList = [];

function computerRandom() {
  computerNum = Math.floor(Math.random() * 100 + 1);
  console.log("정답", computerNum);
}

function play() {
  let Number = inputNum.value;
  if (Number < 0 || Number > 100) {
    resultCheck.textContent = "1~100사이의 숫자를 입력하세요";
    return;
  }
  if (numList.includes(Number)) {
    resultCheck.textContent = "이미 입력한 숫자입니다";
    return;
  }
  if (Number < computerNum) {
    resultCheck.textContent = "UP";
  } else if (Number > computerNum) {
    resultCheck.textContent = "DOWN";
  } else if (Number == computerNum) {
    resultCheck.textContent = "BINGO";
  }
  if (inputNum.value == computerNum) {
    checkBtn.disabled = true;
    return;
  }
  chance--;
  chances.textContent = `남은 기회는 ${chance}번`;
  numList.push(Number);

  console.log(numList);
  if (chance < 1) {
    checkBtn.disabled = true;
    return;
  }
}
function reset() {
  computerRandom();
  resultCheck.textContent = "숫자를 입력하세요";
  inputNum.value = "";
  chance = 5;
  chances.textContent = `남은 기회는 ${chance}번`;
  checkBtn.disabled = false;
  numList = [];
}

function focusInput() {
  inputNum.value = "";
}

computerRandom();
