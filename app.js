app.js
const form = document.getElementById('form'); // Capturando formulário
const cepInput = document.getElementById('cep'); // Capturando input do CEP

form.addEventListener('submit', async (event) => {
    event.preventDefault(); // Evita o envio do formulário  
    const cep = cepInput.value.trim(); // Obtendo o valor do CEP e removendo espaços em branco

    try {
        const resp = await fetch(`https://viacep.com.br/ws/${cep}/json/`); 
        // Fazendo requisição para a API do ViaCEP  
        const data = await resp.json(); // Convertendo a resposta para JSON

        if (data.erro) {
            alert('CEP não encontrado.'); // Caso o CEP não seja encontrado
            return;
        }

        // Preenchendo os campos do formulário com os dados retornados
        document.getElementById('logradouro').textContent = data.logradouro || '-';
        document.getElementById('bairro').textContent = data.bairro || '-';
        document.getElementById('cidade').textContent = data.localidade || '-';
        document.getElementById('uf').textContent = data.uf || '-';

    } catch (err) {
        alert('Erro ao buscar o CEP.'); // Caso ocorra algum erro na requisição
    }

}
);