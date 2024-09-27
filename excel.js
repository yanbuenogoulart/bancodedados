const tabela = [];

document.getElementById('formCadastro').addEventListener('submit', function(event) {
    event.preventDefault();

    // Coletando informações do formulário
    const nomeCliente = document.getElementById('nomeCliente').value;
    const telefoneCliente = document.getElementById('telefoneCliente').value;
    const cpfCliente = document.getElementById('cpfCliente').value;
    const emailCliente = document.getElementById('emailCliente').value;
    const enderecoCliente = document.getElementById('enderecoCliente').value;
    const modeloCarro = document.getElementById('modeloCarro').value;
    const corCarro = document.getElementById('corCarro').value;
    const novoCarro = document.getElementById('novoCarro').value;
    const nomeFuncionario = document.getElementById('nomeFuncionario').value;
    const funcaoFuncionario = document.getElementById('funcaoFuncionario').value;

    // Adicionando as informações à tabela
    tabela.push({
        nomeCliente,
        telefoneCliente,
        cpfCliente,
        emailCliente,
        enderecoCliente,
        modeloCarro,
        corCarro,
        novoCarro,
        nomeFuncionario,
        funcaoFuncionario
    });

    // Atualizando a tabela no HTML
    const tbody = document.getElementById('tabelaCadastro').getElementsByTagName('tbody')[0];
    const novaLinha = tbody.insertRow();
    novaLinha.insertCell(0).textContent = nomeCliente;
    novaLinha.insertCell(1).textContent = telefoneCliente;
    novaLinha.insertCell(2).textContent = cpfCliente;
    novaLinha.insertCell(3).textContent = emailCliente;
    novaLinha.insertCell(4).textContent = enderecoCliente;
    novaLinha.insertCell(5).textContent = modeloCarro;
    novaLinha.insertCell(6).textContent = corCarro;
    novaLinha.insertCell(7).textContent = novoCarro;
    novaLinha.insertCell(8).textContent = nomeFuncionario;
    novaLinha.insertCell(9).textContent = funcaoFuncionario;

    // Exibindo mensagem de sucesso
    document.getElementById('mensagem').textContent = `Cliente ${nomeCliente} cadastrado com sucesso!`;

    // Resetando o formulário
    this.reset();
});
