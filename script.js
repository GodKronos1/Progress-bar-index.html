const circles = document.querySelectorAll(".circle");
const btn_prev = document.getElementById("prev");
const btn_next = document.getElementById("next");
const linie = document.querySelector(".line");

let contor = 0;
let procent = 0;
btn_next.addEventListener("click", (i) => {
  contor++;
  procent += 30;
  linie.style.width = `${procent}%`;
  circles[contor].classList.add("active");
  btn_prev.disabled = false;
  if (contor == 3) btn_next.disabled = true;
  console.log(contor);
});

btn_prev.addEventListener("click", (i) => {
  circles[contor].classList.remove("active");
  contor--;
  procent -= 30;
  btn_next.disabled = false;
  linie.style.width = `${procent}%`;

  if (contor == 0) btn_prev.disabled = true;
  console.log(contor);
});
