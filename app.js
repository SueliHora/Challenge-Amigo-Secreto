//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Seleciona os elementos HTML
const inputAmigo = document.getElementById("amigo");
const btnAdicionar = document.querySelector(".button-add");
const btnSortear = document.querySelector(".button-draw");
const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

// Array para armazenar os nomes
let amigos = [];
let amigosSorteados = []; // Array para guardar os nomes sorteados

// Função para adicionar um amigo à lista
function adicionarAmigo() {
  const nome = inputAmigo.value.trim(); // Remove espaços em branco no início e no fim

  // Valida se o campo está vazio
  if (nome === "") {
    alert("Por favor, insira um nome válido.");
    return;
  }

  // Adiciona o nome ao array e atualiza a lista
  amigos.push(nome);
  atualizarListaAmigos();

  // Limpa o campo de entrada e coloca o foco nele
  inputAmigo.value = "";
  inputAmigo.focus();
}

// Função para atualizar a lista de amigos na tela
function atualizarListaAmigos() {
  listaAmigos.innerHTML = ""; // Limpa a lista para evitar duplicação

  // Adiciona cada nome do array como um item da lista
  amigos.forEach((nome) => {
    const listItem = document.createElement("li");
    listItem.textContent = nome;
    listaAmigos.appendChild(listItem);
  });
}

// Função para sortear um amigo secreto
function sortearAmigo() {
  // Verifica se há pelo menos um nome na lista
  if (amigos.length < 1) {
    alert("Por favor, insira pelo menos um nome para o sorteio.");
    return;
  }

  // Verifica se já houve um sorteio antes
  if (amigosSorteados.length > 0) {
    // Pergunta se o usuário deseja sortear com os mesmos nomes
    const confirmar = confirm("Deseja efetuar o sorteio com os mesmos nomes?");

    if (confirmar) {
      // Realiza o sorteio aleatório com os mesmos nomes
      const indiceSorteado = Math.floor(Math.random() * amigosSorteados.length);
      const amigoSorteado = amigosSorteados[indiceSorteado];

      // Exibe o resultado do sorteio
      resultado.innerHTML = `<p>O amigo secreto sorteado é: ${amigoSorteado}!</p>`;
    } else {
      // Limpa a lista de amigos e recomeça
      amigos = [];
      amigosSorteados = [];
      listaAmigos.innerHTML = "";
      resultado.innerHTML = "";
      alert("A lista de amigos foi limpa. Adicione novos nomes para sortear.");
    }
  } else {
    // Realiza o sorteio aleatório
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];

    // Guarda os nomes sorteados
    amigosSorteados = [...amigos];

    // Limpa a lista de amigos e exibe o resultado do sorteio
    listaAmigos.innerHTML = "";
    resultado.innerHTML = `<p>O amigo secreto sorteado é: ${amigoSorteado}!</p>`;
  }
}

// Adiciona os eventos de clique aos botões
btnAdicionar.addEventListener("click", adicionarAmigo);
btnSortear.addEventListener("click", sortearAmigo);
