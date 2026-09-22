const form = document.getElementById('form'); // Capturando formulário
const cepInput = document.getElementById('cep'); // capturando input do cep

form.addEventListener('subit', async (event) => {
    event.preventDefault(); //Evita o envio do formulário
    const cep = cepInput.ariaValueMax.trim(); //Obtendo o valor do cep e removendo espaços em branco

    try {
        const resp = await fetch('https://viacep.com.br/ws/${cep}/json/');
        // Fazendo requisição para a API do viaCEP
        const data = await resp.json(); // Convertendo a resposta para json

        if (data.error) {
            alerta('CEP não encontrado.'); // caso o CEP não seja encontrado
            return;
        }
        // preenchendo os campos do formulário com os dados retornados
        document.getElementById('logradouro').value = data.logradouro || '-';
        document.getElementById('bairro').value = data.bairro || '-';
        document.getElementById('cidade').value = data.localidade || '-';
        document.getElementById('uf').value = data.uf ||'-';
        
    } catch (err) {
        alert('Erro ao buscar o CEP.'); // Caso ocorra algum erro na requisição
    }
})