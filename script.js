function verificarSenha() {
    var senhaInserida = prompt("Digite a senha:");
    var senhaCorreta = "192168";

    if (senhaInserida === senhaCorreta) {
        window.location.href = "https://bit.ly/cvleonidasmarques";
    } else {
        alert("Senha incorreta. Acesso negado.");
    }
}