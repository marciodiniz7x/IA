async function calcular() {
    // Instanciou a rede neural
    const net = brain.NeuralNetwork({ hiddenLayers: [1]});
    // Forneceu dados para treinamento da rede neural
    const training = [
        { input: [0, 0, 1], output: [0] },
        { input: [0, 1, 1], output: [0] },
        { input: [0, 1, 0], output: [0] },
        { input: [1, 0, 1], output: [1] },
        { input: [1, 1, 0], output: [1] },
    ];
    // Rede neural treina com base nos dados
    net.train(training);
    


}