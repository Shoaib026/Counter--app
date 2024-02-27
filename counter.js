let counterValue = 0;

function updateCounter() {
document.getElementById('counterstart').innerHTML = counterValue;
}

function increment() {
  counterValue++
  updateCounter();
}

function decrement() {
  counterValue--
  updateCounter();
      // if (counterValue > -12) {
      //   counterValue--;
      //   updateCounter();
      // }
}