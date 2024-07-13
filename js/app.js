let carrinho = document.querySelector('.carrinho__produtos__produto');
let elementoTotal = document.getElementById('valor-total');

let quantidade;
let total = 0;

function adicionar() {
  let elementoQuantidade = document.getElementById('quantidade');
  quantidade = elementoQuantidade.value;
  let produtoComPreco = document.getElementById('produto').value.split(' - R$');
  let produto = produtoComPreco[0];
  let valorUnitario = produtoComPreco[1];
  total += (valorUnitario * quantidade);

  // Verificar se o produto selecionado é válido
  if (!produto || produto.trim() === "") {
    alert("Selecione um produto válido.");
    return;
}

// Verificar se a quantidade inserida é válida
if (isNaN(quantidade) || quantidade <= 0) {
    alert("Insira uma quantidade válida.");
    return;
}

  colocarNoCarrinho(quantidade, produto, valorUnitario);
  atualizarTotal();
  elementoQuantidade.value = '';
}

function colocarNoCarrinho(quantidade, produto, valorUnitario) {
  let novoItem = `<section class="carrinho__produtos__produto"><span class="texto-azul">${quantidade}x </span>${produto} - <span class="texto-azul">R$${valorUnitario}</span></section>`;
  carrinho.innerHTML += novoItem;
}

function atualizarTotal() {
  elementoTotal.innerText = `R$${total}`;
}

function limpar() {
  carrinho.innerHTML = '';
  elementoTotal.innerText = `R$$0`;
  total = 0;
}
