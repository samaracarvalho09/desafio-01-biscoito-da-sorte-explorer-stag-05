const btnBiscoitoSorte = document.querySelector("#btnBiscoitoSorte");
const containerAbraDescubra = document.querySelector(
  ".container-abra-descubra"
);
const containerMensagem = document.querySelector(".container-mensagem");
const tryAgain = document.querySelector(".btnBiscoitoSorte")

btnBiscoitoSorte.addEventListener("click", function () {
  btnBiscoitoSorte.classList.add("shake");
  containerAbraDescubra.classList.add("hide");
  containerMensagem.classList.remove("hide");
  console.log("aqui");
});

tryAgain.addEventListener('click', function() {
  containerAbraDescubra.classList.add("hide");
  containerMensagem.classList.remove("hide");
  btnBiscoitoSorte.classList.add("shake");
})