let Name = prompt("Adınızı Giriniz");
let myName = document.querySelector("#isim");

myName.innerHTML = `${Name}!`;

function sayac() {
  let date = new Date().toLocaleTimeString();
  let gun = new Date();
  let days = [
    "PAZAR",
    "PAZARTESİ",
    "SALI",
    "ÇARŞAMBA",
    "PERŞEMBE",
    "CUMA",
    "CUMARTESİ",
  ];

  document.querySelector("#girissaati").innerHTML = `${date} ${
    days[gun.getDay()]
  }`;
}

setInterval(sayac, 1000);
