function buscarCep(cep) {
    // Validação do CEP (opcional)
    cep = cep.replace(/\D/g, ''); // Remove caracteres que não são dígitos
    if (cep.length !== 8) {
      alert('CEP inválido!');
      return false;
    }
  
    // URL da API ViaCEP
    const url = `https://viacep.com.br/ws/${cep}/json/`;
  
    // Requisição usando fetch
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.erro) {
          alert('CEP não encontrado!');
        } else {
          // Preenche os campos do formulário
          document.getElementById('logradouro_input').value = data.logradouro;
          document.getElementById('bairro_input').value = data.bairro;
          document.getElementById('cidade_input').value = data.localidade;
          document.getElementById('estado_input').value = data.uf;
        }
      })
      .catch(error => {
        console.error('Erro ao buscar CEP:', error);
      });
  }
  
  // Exemplo de uso (adicionar este código dentro da sua tag <script></script>)
  document.getElementById('cep_input').addEventListener('blur', () => {
    const cep = document.getElementById('cep_input').value;
    buscarCep(cep);
  });
  