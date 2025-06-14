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
  dataReady();
};

const dataReady = () => {
  const a = dima.value.trim();
  const b = dimb.value.trim();
  const c = dimc.value.trim();
  const p = pivot.value.trim();
  if (
    a.length > 0 &&
    !isNaN(a) &&
    b.length > 0 &&
    !isNaN(b) &&
    c.length > 0 &&
    !isNaN(c) &&
    p.length > 0 &&
    !isNaN(p)
  ) {
    calculate();
  }
};

inputs.forEach((elem) => {
  elem.addEventListener("change", (event) => {
    onNewData(event);
  });
  console.log("added handler");
});

const clear = () => {
  epi.textContent = "";
  distance.textContent = "";
  direction.textContent = "";
};
