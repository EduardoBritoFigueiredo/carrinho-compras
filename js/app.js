let quantidade;
function adicionar() {
  quantidade = document.getElementById('quantidade').value;
  let produtoComPreco = document.getElementById('produto').value.split(' - R$');

  colocarNoCarrinho(quantidade, produtoComPreco[0], produtoComPreco[1]);
}

function colocarNoCarrinho(quantidade, produto, preco) {
  let carrinho = document.querySelector('.carrinho__produtos__produto');
  let novoItem = `<br><span class="texto-azul">${quantidade}x</span>${produto}<span class="texto-azul">R$${preco}</span>`;

  carrinho.innerHTML += novoItem;
}
