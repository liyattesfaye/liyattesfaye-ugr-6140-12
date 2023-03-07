let dayBox = document.getElementById("day-box");
let hrBox = document.getElementById("hr-box");
let minBox = document.getElementById("min-box");
let secBox = document.getElementById("sec-box");

let endDate = new Date(2024, 8, 5, 16, 30);

let endTime = endDate.getTime();
function countdown1() {
  let todayDate = new Date();
  
  let todayTime = todayDate.getTime();
  let remainingTime = endTime - todayTime;
  
  let oneMin = 60 * 1000;
 
  let oneHr = 60 * oneMin;
  
  let oneDay = 24 * oneHr;
  
  let addZeroes = (num) => (num < 10 ? `0${num}` : num);
 
  if (endTime < todayTime) {
    clearInterval(i);
    document.querySelector(
      ".countdown1"
    ).innerHTML = `<h1>Countdown1 had expired!</h1>`;
  }
  
  else {
    
    let daysLeft = Math.floor(remainingTime / oneDay);
    let hrsLeft = Math.floor((remainingTime % oneDay) / oneHr);
    let minsLeft = Math.floor((remainingTime % oneHr) / oneMin);
    let secsLeft = Math.floor((remainingTime % oneMin) / 1000);
   
    dayBox.textContent = addZeroes(daysLeft);
    hrBox.textContent = addZeroes(hrsLeft);
    minBox.textContent = addZeroes(minsLeft);
    secBox.textContent = addZeroes(secsLeft);
  }
}
let i = setInterval(countdown1, 1000);
countdown1();



let dayBox0 = document.getElementById("day-box0");
let hrBox0 = document.getElementById("hr-box0");
let minBox0 = document.getElementById("min-box0");
let secBox0 = document.getElementById("sec-box0");

let endDate0 = new Date(2025, 8, 5, 16, 30);

let endTime0 = endDate0.getTime();
function countdown0() {
  let todayDate = new Date();
  
  let todayTime = todayDate.getTime();
  let remainingTime = endTime0 - todayTime;
  
  let oneMin = 60 * 1000;
 
  let oneHr = 60 * oneMin;
  
  let oneDay = 24 * oneHr;
  
  let addZeroes = (num) => (num < 10 ? `0${num}` : num);
 
  if (endTime0 < todayTime) {
    clearInterval(j);
    document.querySelector(
      ".countdown0"
    ).innerHTML = `<h1>Countdown0 had expired!</h1>`;
  }
  
  else {
    
    let daysLeft = Math.floor(remainingTime / oneDay);
    let hrsLeft = Math.floor((remainingTime % oneDay) / oneHr);
    let minsLeft = Math.floor((remainingTime % oneHr) / oneMin);
    let secsLeft = Math.floor((remainingTime % oneMin) / 1000);
   
    dayBox0.textContent = addZeroes(daysLeft);
    hrBox0.textContent = addZeroes(hrsLeft);
    minBox0.textContent = addZeroes(minsLeft);
    secBox0.textContent = addZeroes(secsLeft);
  }
}
let j = setInterval(countdown0, 1000);
countdown0();



let dayBox2 = document.getElementById("day-box2");
let hrBox2 = document.getElementById("hr-box2");
let minBox2 = document.getElementById("min-box2");
let secBox2 = document.getElementById("sec-box2");

let endDate2 = new Date(2023, 9, 8, 26, 30);

let endTime2 = endDate2.getTime();
function countdown2() {
  let todayDate = new Date();
  
  let todayTime = todayDate.getTime();
  let remainingTime = endTime2 - todayTime;
  
  let oneMin = 60 * 1000;
 
  let oneHr = 60 * oneMin;
  
  let oneDay = 24 * oneHr;
  
  let addZeroes = (num) => (num < 10 ? `0${num}` : num);
 
  if (endTime2 < todayTime) {
    clearInterval(k);
    document.querySelector(
      ".countdown2"
    ).innerHTML = `<h1>Countdown2 had expired!</h1>`;
  }
  
  else {
    
    let daysLeft = Math.floor(remainingTime / oneDay);
    let hrsLeft = Math.floor((remainingTime % oneDay) / oneHr);
    let minsLeft = Math.floor((remainingTime % oneHr) / oneMin);
    let secsLeft = Math.floor((remainingTime % oneMin) / 1000);
   
    dayBox2.textContent = addZeroes(daysLeft);
    hrBox2.textContent = addZeroes(hrsLeft);
    minBox2.textContent = addZeroes(minsLeft);
    secBox2.textContent = addZeroes(secsLeft);
  }
}
let k = setInterval(countdown2, 1000);
countdown2();