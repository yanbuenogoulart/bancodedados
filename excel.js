const rentalData = [];

document.getElementById('carRentalForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const nascimento = document.getElementById('nascimento').value;
    const contato = document.getElementById('contato').value;
    const modelo = document.getElementById('modelo').value;
    const endereco = document.getElementById('endereco').value;
    const novo = document.getElementById('novo').value;
    const dataLocamento = document.getElementById('dataLocamento').value;

    // Adiciona os dados à lista
    rentalData.push({
        Nome: nome,
        "Data de Nascimento": nascimento,
        Contato: contato,
        "Modelo do Carro": modelo,
        Endereço: endereco,
        "Carro Novo": novo,
        "Data de Locação": dataLocamento
    });

    // Imprime os dados no console
    console.table(rentalData);

    // Limpa os campos do formulário
    this.reset();
});
