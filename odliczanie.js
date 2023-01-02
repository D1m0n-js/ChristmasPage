let audio = new Audio(
  "https://d1m0n-js.github.io/ChristmasPage/audio/jinglebell.mp3"
);
audio.preload;

function odliczanie() {
  document.body.addEventListener("click", () => {
    audio.play();
    audio.volume = 0.25;
  });
  setInterval(() => {
    let data = new Date();
    let date1 = new Date(data.getFullYear(), 11, 24, 0, 0, 0);

    if (data > date1) {
      date1.setFullYear(date1.getFullYear() + 1);
    }
    let dniDoSwiat = date1 - data;
    let days = Math.floor(dniDoSwiat / (1000 * 60 * 60 * 24));

    let hrs = 23 - data.getHours();
    let mins = 59 - data.getMinutes();
    let secs = 59 - data.getSeconds();

    document.getElementById("odliczanie").innerHTML =
      "Do świąt zostalo już tylko: " +
      days +
      " dni, " +
      hrs +
      " godzin, " +
      mins +
      " minut, " +
      secs +
      " sekund.";
  }, 1000);
}
