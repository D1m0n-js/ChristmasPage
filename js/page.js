let container = document.querySelector(".main-container");
let containerL = document.getElementById("container-left");
let containerR = document.getElementById("container-right");
function ifScroll() {
  console.log(scrollY);
  if (scrollY > 50) {
    containerL.classList.remove("show");
    containerR.classList.remove("show");
    containerL.classList.add("hiddenL");
    containerR.classList.add("hiddenR");
  }
  if (scrollY < 50) {
    containerL.classList.add("show");
    containerR.classList.add("show");
    containerL.classList.remove("hiddenL");
    containerR.classList.remove("hiddenR");
  }
}
