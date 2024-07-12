let carrinho = document.querySelector('.carrinho__produtos__produto');
let elementoTotal = document.getElementById('valor-total');

let quantidade;
let total = 0;

function adicionar() {
  let elementoQuantidade = document.getElementById('quantidade');
  quantidade = elementoQuantidade.value;
  let produtoComPreco = document.getElementById('produto').value.split(' - R$');
  let produto = produtoComPreco[0];
  let preco = produtoComPreco[1];
  total += (preco * quantidade);

  colocarNoCarrinho(quantidade, produto, preco);
  atualizarTotal();
  elementoQuantidade.value = '';
}

function colocarNoCarrinho(quantidade, produto, preco) {
  let novoItem = `<br><span class="texto-azul">${quantidade}x </span>${produto} - <span class="texto-azul">R$${preco}</span>`;
  console.log(`novoItem = ${novoItem}`);

  carrinho.innerHTML += novoItem;
}

function atualizarTotal() {
  elementoTotal.innerText = `R$${total}`;
}

function limpar() {
  carrinho.innerHTML = '';
  elementoTotal.innerText = `R$$0`;
}
