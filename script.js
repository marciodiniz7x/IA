const resultado = document.querySelector('.resultado');
const porque = document.querySelector('.porque');
const progress = document.querySelector('.progress');
const container2 = document.querySelector('.container2');
const justificativa = document.querySelector('.justificativa');

let time;
let finalperc;

function calcular() {

    // Instanciou a rede neural
    const net = new brain.NeuralNetwork({ hiddenLayers: [3], activation: 'sigmoid'});
    // Forneceu dados para treinamento da rede neural
    const dados = [

        
    // Regra I -> número 1: Adiciona peso ao PSG e número 0: Adiciona peso ao Bayern

    // Regra II -> Vitória e empate fora, adiciona peso ao vencedor e derrota adiciona peso ao adversário


    //  { input: [A, B, C, D], output: [quem pontuar mais] }
    //  A: Jogo do PSG
    //  B: Jogo do Bayern
    //  C: Quem fez mais gols em seus jogos
    //  D: Quem venceu em confronto direto
        
        
        { input: [0, 0, 0], output: [0] },
        { input: [1, 0, 0], output: [0] },
        { input: [1, 1, 1], output: [1] },
        { input: [1, 1, 1], output: [1] },
        

    ];
    // Rede neural treina com base nos dados
    net.train(dados);

    // Rede neural Lê os dados a partir dos quais ela terá que adivinhar o resultado
    const output = net.run([0, 0, 0]);
    const arredond = Math.round(output);

    // Calcula a porcentagem de acerto
    let percent = output*100;
    let coef = 50 - percent;
    if (percent > 50) {
        finalperc = percent
    } else if (percent < 50) {
        finalperc = 50 + coef;
    }
    
    // Substitui o valor 0 e 1 pelos times.
    if ( arredond === 1 ) {
        time = "PSG";
    } else if ( arredond === 0 ) {
        time = "Bayern";
    }

    // Mostrar resultado da previsão no html
    resultado.classList.add('surgir');
    resultado.classList.remove('piscar')
    porque.classList.add('surgir');
    porque.classList.add('sumir');
    progress.classList.add('movimentar');

    resultado.classList.add('piscar');
    resultado.innerHTML = "Cruzando dados...";

    container2.classList.add('sumir');

    
    setTimeout(() => {
        
        progress.classList.remove('movimentar');
        setTimeout(() => {

            progress.style.marginLeft = `${percent}%`;

            setTimeout(() => {
                resultado.classList.remove('surgir');
                porque.classList.remove('sumir');
            }, 1200);
            resultado.classList.remove('piscar');
            resultado.innerHTML = `Pelo modelo dado, avalio que quem vence é o: <span style="color:#d8fa7c;"><b>${time}</b></span>.<br>`;

        }, 300);

    }, 6000);

}

function justificar() {

    container2.classList.remove('sumir');
    
    justificativa.innerHTML = `Com base no histórico dos dois times em seus campeonatos, jogando em casa e fora, e analizando também os confrontos diretos entre os dois, avalio o <span style="color:#d8fa7c;"><b>${time}</b></span> tem <span style="color:#d8fa7c;"><b>${Math.round(finalperc)}%</b></span> de chance de vencer jogando em casa.`;

}