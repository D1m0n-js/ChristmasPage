let otwartePrezenty = 0;

function gra(x) {
  let audioGood = new Audio(
    `https://d1m0n-js.github.io/ChristmasPage/audio/madeinohio.mp3`
  );
  let audioBad = new Audio(
    `https://d1m0n-js.github.io/ChristmasPage/audio/ohioringtone.mp3`
  );
  audioGood.preload;
  audioBad.preload;
  let container = document.getElementById("container");
  let container2 = document.getElementById("container2");
  x.classList.toggle("disabled");
  x.src = "https://d1m0n-js.github.io/ChristmasPage/img/prezent-open.png"; // klikniety prezent sie otwiera dzięki atrybutowi this, który przypisuje ten skrypt tylko kliknietemu prezentowi
  otwartePrezenty++;
  if (otwartePrezenty == 7) {
    let rng = Math.random() * 100; // losuje liczby od 0 do 1 mnożąc wynik przez to dzieki czemu otrzymuje wynik od 0 do 100
    if (rng >= 50) {
      audioGood.play();
      let img = document.createElement("img");
      let text = document.createElement("p");
      let text1 = document.createElement("p");
      let text2 = document.createElement("p");
      let made = document.createTextNode("Made");
      let iN = document.createTextNode("In");
      let ohio = document.createTextNode("Ohio");
      document.body.style.backgroundColor = "#c62121";
      text1.appendChild(iN);
      text2.appendChild(ohio);
      img.src = "https://d1m0n-js.github.io/ChristmasPage/img/papis.png";
      img.classList.toggle("papis");
      container.appendChild(img);
      text.appendChild(made);
      setTimeout(() => {
        container.appendChild(text);
      }, 1600);
      setTimeout(() => {
        container.appendChild(text1);
      }, 1900);
      setTimeout(() => {
        container.appendChild(text2);
      }, 2400);

      setTimeout(() => {
        container2.appendChild(text);
      }, 6700);
      setTimeout(() => {
        container2.appendChild(text1);
      }, 7000);
      setTimeout(() => {
        container2.appendChild(text2);
      }, 7600);
      setTimeout(() => {
        alert(
          "Niesamowite! Byłeś grzeczny w tym roku! Twoim prezentem na dziś jest..."
        );
        alert("Panie piekarczyku prosze wpisac mi 6 postarałem sie");
      }, 8200);
    } else {
      audioBad.play();
      audioBad.volume = 0.3;
      setTimeout(() => {
        alert("Byłeś złym chłopcem >:(, mikołaj nie jest dumny");
      }, 500);
      setTimeout(() => {
        window.close();
      }, 8000);
      setInterval(() => {
        document.body.style.backgroundColor = "red";
      }, 500);
      setInterval(() => {
        document.body.style.backgroundColor = "green";
      }, 1100);
    }
  }
}
