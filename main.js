import { mensagens } from './mensagens.js';

const btnBiscoitoSorte = document.querySelector(".fortune-cookie-button");
const containerAbraDescubra = document.querySelector(".initial-screen");
const containerMensagem = document.querySelector(".message-screen");
const tryAgain = document.querySelector("#newFortuneButton");
const mensagemSorte = document.querySelector('#fortuneMessage');

function gerarMensagemAleatoria() {
  const indiceAleatorio = Math.floor(Math.random() * mensagens.length);
  return mensagens[indiceAleatorio];
}

function tremeCookie() {
  return new Promise((resolve) => {
    btnBiscoitoSorte.classList.add('tremer');
    setTimeout(() => {
      btnBiscoitoSorte.classList.remove('tremer');
      resolve();
    }, 800); // Duração da animação
  });
}

async function openCookie() {
  await tremeCookie();
  const mensagemAleatoria = gerarMensagemAleatoria();
  containerAbraDescubra.classList.add("hide");
  containerMensagem.classList.remove("hide");
  mensagemSorte.textContent = mensagemAleatoria;
}

async function resetCookie() {
  containerMensagem.classList.add("hide");
  containerAbraDescubra.classList.remove("hide");
  await tremeCookie();
  openCookie();
}

btnBiscoitoSorte.addEventListener('click', openCookie);
tryAgain.addEventListener('click', resetCookie);