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
let checkBtn = document.getElementById("checkBtn");
let inputNum = document.getElementById("inputNum");
let resultCheck = document.getElementById("resultCheck");
let chances = document.getElementById("chance");
let resetBtn = document.getElementById("resetBtn");
let gif = document.getElementById("gif");

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
    gif.src =
      "https://media2.giphy.com/media/Kg3HfmbPOGJggjjS31/giphy.gif?cid=ecf05e47rkksxu6j0xukkg779zmfvxgvtxm2qfd6woihj4nt&rid=giphy.gif&ct=g";
  } else if (Number > computerNum) {
    resultCheck.textContent = "DOWN";
    gif.src =
      "https://media3.giphy.com/media/Js7cqIkpxFy0bILFFA/giphy.gif?cid=ecf05e47z7qmdk026qw8nk2lc6jd3z4qfffk1i6gz8qxymtm&rid=giphy.gif&ct=g";
  } else if (Number == computerNum) {
    resultCheck.textContent = "BINGO";
    gif.src =
      "https://media4.giphy.com/media/KU45lwbDexLBbyCCte/giphy.gif?cid=ecf05e47vuufxrd17el9xsd71bhyt2pl0cobtmbm1fn0qcpl&rid=giphy.gif&ct=s";
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
    resultCheck.textContent = "실패!";
    gif.src =
      "https://media0.giphy.com/media/pSBiwdd99Cak0/giphy.gif?cid=ecf05e47gixhfzl36exufircazyb4lujofjpi6dujg0dpazn&rid=giphy.gif&ct=g";
    return;
  }
}
function reset() {
  computerRandom();
  resultCheck.textContent = "다시한번 가보자구~~";
  inputNum.value = "";
  chance = 5;
  chances.textContent = `남은 기회는 ${chance}번`;
  gif.src =
    "https://media0.giphy.com/media/cEYFeE4wJ6jdDVBiiIM/giphy.gif?cid=ecf05e47s3438kxc6il3avammuwo75wsjxsjbcsnj4rpixgv&rid=giphy.gif&ct=g";
  checkBtn.disabled = false;
  numList = [];
}

function focusInput() {
  inputNum.value = "";
}

computerRandom();
