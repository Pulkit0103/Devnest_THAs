const Bg = document.getElementById("bg");
for (let i = 1; i <= 36; i++) {
  Bg.innerHTML += ' <div class="box"></div>';
}
const box = document.querySelectorAll(".box");
var Inner = 0;
var Outer = 36;
box.forEach((BoxClicking) =>
  BoxClicking.addEventListener("click", () => {
    if (BoxClicking.classList.contains("boxclicked")) {
      BoxClicking.classList.remove("boxclicked");
      Inner--;
      Outer++;
    } else {
      BoxClicking.classList.add("boxclicked");
      Inner++;
      Outer--;
    }
    document.getElementById("Inner").innerText = Inner;
    document.getElementById("Outer").innerText = Outer;
  })
);
