let Name = prompt("Adınızı Giriniz");
let myName = document.querySelector("#isim");

myName.innerHTML = `${Name}!`;

function sayac() {
  let date = new Date().toLocaleTimeString();

  document.querySelector("#girissaati").innerHTML = date;
}

setInterval(sayac, 1000);

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
document.querySelector("#girisgunu").innerHTML = days[gun.getDay()];
