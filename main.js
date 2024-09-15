const mensagens = [
  "A vida é como andar de bicicleta. Para manter o equilíbrio, você deve continuar em movimento.",
  "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
  "Acredite em si mesmo e todo o resto virá naturalmente.",
  "A paciência é a chave para resolver muitos problemas.",
  "Não conte os dias, faça os dias contarem.",
  "O melhor ainda está por vir.",
  "Seja a mudança que você deseja ver no mundo.",
  "Sonhe grande e se atreva a falhar.",
  "Não espere por oportunidades. Crie-as.",
  "A única maneira de fazer um ótimo trabalho é amar o que você faz.",
  "Você é mais corajoso do que acredita, mais forte do que parece e mais inteligente do que pensa.",
  "Cada dia é uma nova chance para mudar sua vida.",
  "A vida é feita de escolhas. Escolha ser feliz.",
  "Nunca é tarde para ser o que você poderia ter sido.",
  "A felicidade não é algo pronto. Ela vem de suas próprias ações.",
  "Não se preocupe com os fracassos; preocupe-se com as chances que você perde quando não tenta.",
  "A vida é uma jornada, não um destino.",
  "O sucesso não é o final, o fracasso não é fatal: é a coragem de continuar que conta.",
  "Acredite que você pode e você já está no meio do caminho.",
  "Você não encontra a felicidade, você a cria.",
  "O futuro pertence àqueles que acreditam na beleza de seus sonhos.",
  "O segredo para ir em frente é começar.",
  "A vida é curta demais para não fazer o que você ama.",
  "A maior glória não está em nunca cair, mas em levantar-se a cada queda.",
  "Você nunca será velho demais para definir outro objetivo ou sonhar um novo sonho.",
  "A única forma de alcançar o impossível é acreditar que é possível.",
  "O sucesso é gostar de si mesmo, gostar do que você faz e gostar de como você faz.",
  "O maior erro que você pode cometer é ter medo de cometer erros.",
  "A única pessoa que você está destinado a se tornar é a pessoa que você decide ser.",
  "A vida não é sobre esperar a tempestade passar, é sobre aprender a dançar na chuva.",
  "Não importa quão lentamente você vá, desde que você não pare.",
  "A vida é uma questão de escolhas. Escolha ser positivo.",
  "Os sonhos não funcionam a menos que você trabalhe duro.",
  "Cada dia é uma nova oportunidade para ser melhor.",
  "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
  "Você não pode mudar o passado, mas pode moldar seu futuro.",
  "Faça o que você ama e não trabalhará um único dia em sua vida.",
  "O melhor jeito de prever o futuro é criá-lo.",
  "Não espere. O tempo nunca será o certo.",
  "A vida é 10% o que acontece com você e 90% como você reage a isso.",
  "Não tenha medo de desistir do bom para buscar o ótimo.",
  "A única maneira de alcançar o impossível é acreditar que é possível.",
  "A vida é uma jornada e não um destino.",
  "Aproveite ao máximo cada momento.",
  "Não conte os dias, faça os dias contarem.",
  "A melhor forma de prever o futuro é inventá-lo.",
  "Você é o único responsável pela sua felicidade.",
  "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
  "Você é mais forte do que imagina e mais capaz do que acredita.",
  "Cada dia é uma nova chance para mudar sua vida.",
  "O que você faz hoje pode melhorar todos os seus amanhãs.",
  "Não desista. Grandes coisas levam tempo.",
  "A vida é feita de escolhas. Faça as suas com sabedoria."
];

const btnBiscoitoSorte = document.querySelector("#btnBiscoitoSorte");
const containerAbraDescubra = document.querySelector(
  ".container-abra-descubra"
);
const containerMensagem = document.querySelector(".container-mensagem");
const tryAgain = document.querySelector("#btnAnotherMessage")
const mensagemSorte = document.querySelector('#mensagem-sorte')

btnBiscoitoSorte.addEventListener("click", function () {
  btnBiscoitoSorte.classList.add("shake");
  containerAbraDescubra.classList.add("hide");
  containerMensagem.classList.remove("hide");
  console.log("aqui");
});

tryAgain.addEventListener('click', function() {
  console.log('try again')
  containerAbraDescubra.classList.add("hide");
  // containerMensagem.classList.remove("hide");
  btnBiscoitoSorte.classList.add("shake");
})

function gerarMensagemAleatoria() {
  const indiceAleatorio = Math.floor(Math.random() * mensagens.length);
  return mensagens[indiceAleatorio];
}

tryAgain.addEventListener('click', () => {
  const mensagemAleatoria = gerarMensagemAleatoria();
  mensagemSorte.textContent = mensagemAleatoria;
});

btnBiscoitoSorte.addEventListener('click', () => {
  const mensagemAleatoria = gerarMensagemAleatoria();
  mensagemSorte.textContent = mensagemAleatoria;
});