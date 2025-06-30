
let contador = 0;

function adicionarAoCarrinho() {
    contador++;
    document.getElementById('contador').textContent = contador;
    document.getElementById('itens-carrinho').textContent = `Você tem ${contador} item(ns) no carrinho.`;
}
