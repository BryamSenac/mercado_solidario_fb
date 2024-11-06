document.getElementById('form-cadastro').addEventListener('submit', function (event) {
    event.preventDefault();

    // Captura os valores dos inputs
    const nome = document.getElementById('nome-produto').value;
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmar-senha').value;
    const diaNascimento = document.getElementById('dia-nascimento').value;
    const mesNascimento = document.getElementById('mes-nascimento').value;
    const anoNascimento = document.getElementById('ano-nascimento').value;

    // Verifica se a senha e a confirmação de senha são iguais
    if (senha !== confirmarSenha) {
        alert("As senhas não coincidem!");
        return; // Impede o processamento do formulário se as senhas não baterem
    }

    // Loga os valores no console
    console.log("Nome:", nome);
    console.log("Senha:", senha);
    console.log("Data de Nascimento:", `${diaNascimento}/${mesNascimento}/${anoNascimento}`);

    // Exemplo: você poderia continuar a lógica aqui para enviar os dados para um servidor, se necessário
});

