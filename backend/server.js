// Simulação para validação de perguntas e respostas
const gabarito = {
    resp1: "Grifinória",
    resp2: "Sirius Black",
    resp3: "Cervo",
    resp4: "Granger"   
};

function avaliarRespostas(resp1, resp2) {
    let pontuacao = 0;
    if (resp1 === gabarito.resp1) pontuacao++;
    if (resp2 === gabarito.resp2) pontuacao++;
    if (resp3 === gabarito.resp3) pontuacao++;
    if (resp4 === gabarito.resp4) pontuacao++;
    return pontuacao;
}
