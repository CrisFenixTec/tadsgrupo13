// Simulação para validação de perguntas e respostas
const gabarito = {
    resp1: "Grifinória",
    resp2: "Sirius Black",
    resp3: "Cervo",
    resp4: "Granger",
    resp5: "A Toca",
    resp6: "Sete",
    resp7: "Alvo Dumbledore",
    resp8: "Avada Kedavra, Crucio e Império",
    resp9: "Prisão de Azkaban",
    resp10: "Mapa do Maroto"
};

function avaliarRespostas(resp1, resp2) {
    let pontuacao = 0;
    if (resp1 === gabarito.resp1) pontuacao++;
    if (resp2 === gabarito.resp2) pontuacao++;
    if (resp3 === gabarito.resp3) pontuacao++;
    if (resp4 === gabarito.resp4) pontuacao++;
    if (resp5 === gabarito.resp5) pontuacao++;
    if (resp6 === gabarito.resp6) pontuacao++;
    if (resp7 === gabarito.resp7) pontuacao++;
    if (resp8 === gabarito.resp8) pontuacao++;
    if (resp9 === gabarito.resp9) pontuacao++;
    if (resp10 === gabarito.resp10) pontuacao++;
    return pontuacao;
}
