// Simulação para validação do Quiz de Harry Potter
const gabarito = {
    resp1: "Grifinória",
    resp2: "Sirius Black"
};

function avaliarRespostas(resp1, resp2) {
    let pontuacao = 0;
    if (resp1 === gabarito.resp1) pontuacao++;
    if (resp2 === gabarito.resp2) pontuacao++;
    return pontuacao;
}

console.log("Servidor inicializado para o Projeto Integrador.");
