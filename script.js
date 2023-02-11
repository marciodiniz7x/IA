const resultado = document.querySelector('.resultado');

async function calcular() {

    // Instanciou a rede neural
    const net = new brain.NeuralNetwork({ hiddenLayers: [4], activation: 'sigmoid'});
    // Forneceu dados para treinamento da rede neural
    const dados = [
        // O output mostra o time vencedor após um retrospecto de 6 jogos inseridos no input, ignorando os empates, sendo o 1 o time mandante do quinto jogo.
        { input: [1, 1, 1, 1, 0, 1], output: [0] },
        { input: [0, 0, 0, 1, 1, 1], output: [1] },
        { input: [0, 0, 1, 0, 0, 0], output: [0] },
        { input: [1, 0, 0, 1, 1, 1], output: [0] },
        { input: [0, 1, 1, 1, 0, 0], output: [1] },

    ];
    // Rede neural treina com base nos dados
    net.train(dados);
    // Rede neural Lê os dados a partir dos quais ela terá que adivinhar o resultado
    const output = net.run([0, 1, 0, 0, 0, 1]);
    const arredond = Math.round(output);
    const porcent = Math.round(100*output);
    // Substitui o valor 0 e 1 pelos times.
    
    if ( arredond === 1 ) {
        var time = "PSG";
    } else if ( arredond === 0 ) {
        var time = "Bayern";
    }

    // Mostrar resultado da previsão no html
    resultado.classList.add('surgir');
    setTimeout(() => {
        resultado.classList.remove('surgir');
    }, 1200);
    resultado.innerHTML = `Pelo modelo dado, creio que quem passa de fase é o: <b>${time}</b>. <br> A chance de eu esta certa é de <b>${porcent}</b>%.`;

}