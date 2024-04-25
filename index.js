let samay = document.getElementById("waqt");
let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");
let laps = document.getElementById("laps");
let shuru = 0;
let khatm = 0;
let rukaHua;
let i = 1;
startBtn.addEventListener("click", function () {
  shuru = Date.now() - khatm;
  //   console.log(shuru);
  rukaHua = setInterval(() => {
    khatm = Date.now() - shuru;
    samay.innerText = diplayTime(khatm);
  }, 10);
  startBtn.disabled = true;
  stopBtn.disabled = false;
});

stopBtn.addEventListener("click", function () {
  clearInterval(rukaHua);
  startBtn.disabled = false;
  stopBtn.disabled = true;
  let p1 = document.createElement("p");
  p1.innerText = i++ + "." + samay.innerText;
  laps.append(p1);
  laps.style.visibility = "visible";
});

resetBtn.addEventListener("click", function () {
  clearInterval(rukaHua);
  khatm = 0;
  samay.innerText = "00:00:00:00";
  startBtn.disabled = false;
  stopBtn.disabled = true;
  laps.innerHTML = "<h2>LAPS</h2>";
  laps.style.visibility = "hidden";
  i = 1;
});

function diplayTime(something) {
  let ms = Math.floor((something % 1000) / 10);
  let sec = Math.floor((something % 60000) / 1000);
  let min = Math.floor((something % 3600000) / 60000);
  let hrs = Math.floor(something / 3600000);
  let ans = "";

  ans += (hrs < 10 ? "0" : "") + hrs + ":";
  ans += (min < 10 ? "0" : "") + min + ":";
  ans += (sec < 10 ? "0" : "") + sec + ":";
  ans += (ms < 10 ? "0" : "") + ms;
  return ans;
}
