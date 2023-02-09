async function calcular() {
    // Instanciou a rede neural
    const net = brain.NeuralNetwork({ hiddenLayers: [1]});
    // Forneceu dados para treinamento da rede neural
    const training = [
        { input: [0, 0, 1], output: [0]}
    ];

}