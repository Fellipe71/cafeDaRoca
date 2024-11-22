const botao = document.getElementById('meuBotao');
const texto = document.getElementById('meuTexto');



const precoPorQuilo = 5; // Preço em dólares por quilo de café

document.getElementById('converter').onclick = function() {
    const kg = parseFloat(document.getElementById('kg').value);
    if (!isNaN(kg) && kg >= 0) {
        const totalDolares = kg * precoPorQuilo;
        document.getElementById('resultado').innerText = `Valor em dólares: $${totalDolares.toFixed(2)}`;
    } else {
        document.getElementById('resultado').innerText = 'Por favor, insira um valor válido.';
    }
};