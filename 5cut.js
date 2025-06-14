console.log("hello");

const dima = document.getElementById("dima");
const dimb = document.getElementById("dimb");
const dimc = document.getElementById("dimc");
const pivot = document.getElementById("pivot");
const inputs = [dima, dimb, dimc, pivot];
const epi = document.getElementById("epi");
const distance = document.getElementById("distance");
const direction = document.getElementById("direction");

const calculate = () => {
  console.log("calculating...");
  const error = (dima.value - dimb.value) / 4 / dimc.value;
  const move = error * pivot.value;
  console.log(`epi: ${error.toFixed(4)}, move: ${move.toFixed(4)}`);
  epi.innerHTML = error.toFixed(4);
  distance.innerHTML = move.toFixed(4);
  if (error < 0) {
    direction.textContent = "move fence towards blade";
  } else {
    direction.textContent = "move fence away from blade";
  }
};

const onNewData = (event) => {
  const data = event.target.value;
  console.log("handling change for " + data);
  if (!(data === "") && !isNaN(data)) {
    calculate();
  }

}

inputs.forEach(elem => {
  elem.addEventListener("change", (event) => {
    onNewData(event);
  });
  console.log('added handler');
})

// dima.addEventListener("change", (event) => {
//   onNewData(event);
// });

// dimb.addEventListener("change", () => {
//   if (!isNaN(dimb.value)) {
//     calculate();
//   }
// });
// dimc.addEventListener("change", () => {
//   if (!isNaN(dimc.value)) {
//     calculate();
//   }
// });
// pivot.addEventListener("change", () => {
//   if (!isNaN(pivot.value)) {
//     calculate();
//   }
// });
