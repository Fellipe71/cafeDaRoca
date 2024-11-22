const botao = document.getElementById('meuBotao');
const texto = document.getElementById('meuTexto');



const precoPorSaca = 100; // Preço em dólares por saca de café

document.getElementById('converter').onclick = function() {
    const sacas = parseFloat(document.getElementById('sacas').value);
    if (!isNaN(sacas) && sacas >= 0) {
        const totalDolares = sacas * precoPorSaca;
        document.getElementById('resultado').innerText = `Valor em dólares: $${totalDolares.toFixed(2)}`;
    } else {
        document.getElementById('resultado').innerText = 'Por favor, insira um valor válido.';
    }
};