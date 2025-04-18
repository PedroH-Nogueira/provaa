document.getElementById('foto').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const quantParticipantes = parseFloat(document.getElementById('quantParticipantes').value);
    const tipoSessao = document.getElementById('tipoSessao').value;
    const maquiagemSim = document.getElementById('sim'); 
    const maquiagemNao = document.getElementById('nao');
  
    if (sim.checked) {
        const valorSelecionado = sim.value; 
      } else if (nao.checked) {
        const valorSelecionado = nao.value;
    }

    let precoIndividual = 150;
    let precoCasal = 250;
    let precoFamilia = 300;
    let quintoParticipante =  150;
    let maquiagem = 50;
   
  
    document.getElementById('resultado').innerHTML = `
      <p>Cliente: <strong>${nome}</strong></p>;
      <p>E-mail: <strong>${email}</strong></p>;
      <p>Sessão: <strong>${tipoSessao}</strong></p>;
      <p>E-mail: <strong>${valorSelecionado}</strong></p>;
    `;
  }); 