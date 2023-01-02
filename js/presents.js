let isClaimable = true;

function prezent() {
  let prezenty = [
    "kotka",
    "myszke",
    "250zł",
    "słuchawki",
    "płyte szpaka",
    "1500 vbucks",
    "karte kredytową twojego taty (tak na prawdę ją ukradleś",
    "rózge",
    "Dożywotni zapas Robux",
    "1200 Robux",
    "Roblox premium.",
    "monopoly kotki",
    "nową klwaiature",
    "nowy mikrofon",
    "sprzęt do inhalacji dymu do płuc (nie mów karolowi)",
  ];
  let wybranyPrezent = prezenty[Math.floor(Math.random() * prezenty.length)];
  document.getElementById("prezentWylosowany").innerHTML =
    "Dostałeś " + wybranyPrezent + ".";
}

let isTiming;

function redirect() {
  if (isClaimable) {
    window.open("prezent.html");
    isClaimable = false;
    return;
  } else {
    alert("Nie możesz jeszcze odebrać kolejnego prezentu!");
  }
}

function play() {
  window.open("papis.html");
}
