/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let cartas = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let tipos = ["diamond", "heart", "suit", "spade"];
  let numero = document.querySelector(".numero");
  let button = document.getElementById("button");

  numero.innerHTML = cartas[Math.floor(Math.random() * cartas.length)];
  numero.classList.add(tipos[Math.floor(Math.random() * tipos.length)]);
};
