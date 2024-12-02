const botao = document.getElementById('meuBotao');
const texto = document.getElementById('meuTexto');




document.getElementById('converter').onclick = function() {
    let precoPorSaca = parseFloat(document.getElementById('cotacao').value);
    let sacas = parseFloat(document.getElementById('sacas').value);
    if (!isNaN(sacas) && sacas >= 0) {
        let totalReais = sacas * precoPorSaca;
        console.log(totalReais);
        
        document.getElementById('resultado').innerText = `Valor em Reais: R$${totalReais.toFixed(2)}`;
    } else {
        document.getElementById('resultado').innerText = 'Por favor, insira um valor válido.';
    }
};