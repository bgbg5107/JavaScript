let computerNum = 0;
let chance = 5;
let numList = [];
let inputNum = document.getElementById("inputNum");
let resultCheck = document.getElementById("resultCheck");
let chances = document.getElementById("chance");
let gif = document.getElementById("gif");

inputNum.addEventListener("focus", focusInput=()=>{inputNum.value = "";});

 const computerRandom=()=> {
  computerNum = Math.floor(Math.random() * 100 + 1);
  console.log("정답", computerNum);
}

const play=()=> {
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
  if (chance < 1) {
    checkBtn.disabled = true;
    resultCheck.textContent = "실패!";
    gif.src =
      "https://media0.giphy.com/media/pSBiwdd99Cak0/giphy.gif?cid=ecf05e47gixhfzl36exufircazyb4lujofjpi6dujg0dpazn&rid=giphy.gif&ct=g";
    return;
  }
}
const reset=()=> {
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

computerRandom();
