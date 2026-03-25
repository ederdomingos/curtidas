
let pessoas = [];

let botao = document.getElementById("curtir");

botao.addEventListener("click", function() {
    let nome = document.getElementById("nome").value;

    if (nome !== "" && !pessoas.includes(nome)) {
        pessoas.push(nome);
    }

    atualizarTexto();

    document.getElementById("nome").value = "";
});

function atualizarTexto() {
    let texto = document.getElementById("resultado");

    if (pessoas.length === 0) {
        texto.innerText = "Ninguém curtiu";
    } else if (pessoas.length === 1) {
        texto.innerText = pessoas[0] + " curtiu";
    } else if (pessoas.length === 2) {
        texto.innerText = pessoas[0] + " e " + pessoas[1] + " curtiram";
    } else {
        texto.innerText = pessoas[0] + ", " + pessoas[1] + " e mais " + (pessoas.length - 2) + " pessoas curtiram";
    }
}

