//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Seleciona os elementos HTML
const inputAmigo = document.getElementById("amigo");
const btnAdicionar = document.querySelector(".button-add");
const btnSortear = document.querySelector(".button-draw");
const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

// 1) Crie um array para armazenar os nomes
let amigos = [];
let sorteioRealizado = false; // Variável para controlar se já houve um sorteio

// 2) Implementa uma função para agregar amigos
function adicionarAmigo() {
  const nome = inputAmigo.value.trim(); // Remove espaços em branco no início e no fim

  // Valida se o campo está vazio
  if (nome === "") {
    alert("Por favor, insira um nome válido.");
    return;
  }

  // Valida se o nome já existe na lista
  if (amigos.includes(nome)) {
    alert("Este nome já foi adicionado.");
    inputAmigo.value = "";
    inputAmigo.focus();
    return;
  }

  // Adiciona o nome ao array e atualiza a lista
  amigos.push(nome);
  atualizarListaAmigos();

  // Limpa o campo de entrada e coloca o foco nele
  inputAmigo.value = "";
  inputAmigo.focus();
}

// 3) Implementa uma função para atualizar a lista de amigos na tela
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
  // Verifica se há pelo menos dois nomes na lista
  if (amigos.length < 2) {
    alert("Por favor, insira pelo menos dois nomes para o sorteio.");
    return;
  }

  // Verifica se já houve um sorteio antes
  if (sorteioRealizado) {
    // Pergunta se o usuário deseja sortear com os mesmos nomes
    const confirmar = confirm("Deseja efetuar o sorteio com os mesmos nomes?");

    if (confirmar) {
      // Realiza o sorteio aleatório com os mesmos nomes
      const indiceSorteado = Math.floor(Math.random() * amigos.length);
      const amigoSorteado = amigos[indiceSorteado];

      // Exibe o resultado do sorteio
      resultado.innerHTML = `<p>O amigo secreto sorteado é: ${amigoSorteado}!</p>`;
    } else {
      // Limpa a lista de amigos e recomeça
      amigos = [];
      atualizarListaAmigos();
      resultado.innerHTML = "";
      sorteioRealizado = false; // Reseta a variável de controle
      alert("A lista de amigos foi limpa. Adicione novos nomes para sortear.");
    }
  } else {
    // Realiza o sorteio aleatório
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];

    // Exibe o resultado do sorteio
    resultado.innerHTML = `<p>O amigo secreto sorteado é: ${amigoSorteado}!</p>`;

    sorteioRealizado = true; // Marca que o sorteio foi realizado
  }
}

// Adiciona os eventos de clique aos botões
btnAdicionar.addEventListener("click", adicionarAmigo);
btnSortear.addEventListener("click", sortearAmigo);
