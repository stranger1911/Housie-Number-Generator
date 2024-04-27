let generateBtn = document.querySelector(".generate-btn");
let generatedNum = document.querySelector(".generated-number");
let resetBtn = document.querySelector(".reset-btn");
let number = document.querySelectorAll(".number");
let audioOn = document.querySelector(".audio-on");
let audioOf = document.querySelector(".audio-of");
let history = document.querySelector(".history");
let autoGen = document.querySelector(".auto");
let autoGenBtn = document.querySelector(".autoBtn");
let stopAutoGen = document.querySelector(".stop");
let resumeAutoGen = document.querySelector(".resume");
let synth = window.speechSynthesis;
let utterance;
let numCount = 1;
let numberStored = [];
let maxNum = 90;
let muted = false;
let intervalId3;
let intervalId6;
let intervalId9;

autoGenBtn.addEventListener("click", autoGenerateNum);

generateBtn.addEventListener("click", generateRandomNum);

function autoGenerateNum() {
  generateBtn.disabled = true;
  autoGenBtn.style.display = "none";
  stopAutoGen.style.display = "block";
  if (autoGen.value == 3 && numCount < 90) {
    intervalId3 = setInterval(() => {
      clearInterval(intervalId6);
      clearInterval(intervalId9);
      generateRandomNum();
    }, 3000);
  } else if (autoGen.value == 6 && numCount < 90) {
    intervalId6 = setInterval(() => {
      clearInterval(intervalId3);
      clearInterval(intervalId9);
      generateRandomNum();
    }, 6000);
  } else if (autoGen.value == 9 && numCount < 90) {
    intervalId9 = setInterval(() => {
      clearInterval(intervalId6);
      clearInterval(intervalId3);
      generateRandomNum();
    }, 9000);
  }
}

function generateRandomNum() {
  if (numCount <= maxNum) {
    let randomNum;
    do {
      randomNum = Math.floor(Math.random() * maxNum) + 1;
    } while (numberStored.includes(randomNum));

    numberStored.push(randomNum);
    stopSpeech();
    utterance = new SpeechSynthesisUtterance(randomNum);
    if (muted) {
      utterance.volume = 0;
    }
    synth.speak(utterance);
    generatedNum.innerHTML = randomNum;
    let changeDivColor = document.querySelector(
      `.number:nth-child(${randomNum})`
    );
    changeDivColor.style.backgroundColor = "#f8333c";
    numCount++;
  } else {
    alert("Please reset first");
    clearInterval(intervalId3);
    clearInterval(intervalId6);
    clearInterval(intervalId9);
  }
}

resetBtn.addEventListener("click", reset);
function reset() {
  numberStored = [];
  number.forEach((el) => {
    el.style.backgroundColor = "#52b788";
  });
  numCount = 1;
  generatedNum.innerHTML = "";
  generateBtn.disabled = false;
  autoGenBtn.style.display = "block";
  resumeAutoGen.style.display = "none";
  stopAutoGen.style.display = "none";
  clearInterval(intervalId3);
  clearInterval(intervalId6);
  clearInterval(intervalId9);
}

function pauseSpeech() {
  if (synth && utterance) {
    synth.pause();
  }
}

function resumeSpeech() {
  if (synth && utterance) {
    synth.resume();
  }
}

function stopSpeech() {
  if (synth && utterance) {
    synth.cancel();
  }
}

audioOn.addEventListener("click", muteSpeech);

function muteSpeech() {
  muted = true;
  if (synth && utterance) {
    utterance.volume = 0;
  }
  audioOn.style.display = "none";
  audioOf.style.display = "block";
}

audioOf.addEventListener("click", unmuteSpeech);

function unmuteSpeech() {
  muted = false;
  if (synth && utterance) {
    utterance.volume = 1;
  }
  audioOn.style.display = "block";
  audioOf.style.display = "none";
}

history.addEventListener("click", showHistory);

function showHistory() {
  let str = numberStored.toString();
  alert(str.split(",").join(">"));
}

stopAutoGen.addEventListener("click", function () {
  generateBtn.disabled = false;
  clearInterval(intervalId3);
  clearInterval(intervalId6);
  clearInterval(intervalId9);
  stopAutoGen.style.display = "none";
  resumeAutoGen.style.display = "block";
});

resumeAutoGen.addEventListener("click", function () {
  generateBtn.disabled = true;
  stopAutoGen.style.display = "block";
  resumeAutoGen.style.display = "none";
  if (autoGen.value == 3 && numCount < 90) {
    intervalId3 = setInterval(() => {
      clearInterval(intervalId6);
      clearInterval(intervalId9);
      generateRandomNum();
    }, 3000);
  } else if (autoGen.value == 6 && numCount < 90) {
    intervalId6 = setInterval(() => {
      clearInterval(intervalId3);
      clearInterval(intervalId9);
      generateRandomNum();
    }, 6000);
  } else if (autoGen.value == 9 && numCount < 90) {
    intervalId9 = setInterval(() => {
      clearInterval(intervalId6);
      clearInterval(intervalId3);
      generateRandomNum();
    }, 9000);
  }
});
