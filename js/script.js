const runF = document.querySelector(".run-f");
const runB = document.querySelector(".run-b");
const stopBtn = document.querySelector(".stop");
const car = document.querySelector(".car");

var marginVal = 0;
let forward;

runF.addEventListener("click", () => {
  setTimeout(() => {
    clearInterval(backward);
  }, 0);

  forward = setInterval(() => {
    marginVal++;
    car.style.marginLeft = marginVal + "px";
    if (marginVal >= window.innerWidth - 30) {
      marginVal = -370;
    }
  }, 10);

  stopBtn.addEventListener("click", () => {
    setTimeout(() => {
      clearInterval(forward);
    }, 0);
  });
});

let backward;
runB.addEventListener("click", () => {
  backward = setInterval(() => {
    setTimeout(() => {
      clearInterval(forward);
    }, 0);

    marginVal--;

    car.style.marginLeft = marginVal + "px";
    if (marginVal <= -370) {
      marginVal = window.innerWidth - 30;
    }
    console.log(marginVal);
  }, 10);

  stopBtn.addEventListener("click", () => {
    setTimeout(() => {
      clearInterval(backward);
    }, 0);
  });
});
