/* aqui estao as funcoes pra deixar o site com movimento */

//"bom dia" ou "boa noite"
function saudacaodinamica() {
    const agora = new Date(); // pega a hora do computador
    const hora = agora.getHours(); 
    const elementomensagem = document.getElementById('mensagem-boas-vinda');
    let saudacao = "";

    //saudação
    if (hora >= 5 && hora < 12) {
        saudacao = "🌅 Bom dia! Que tal um banho fresquinho para o seu bicho hoje?";
    } else if (hora >= 12 && hora < 18) {
        saudacao = "☀️ Boa tarde! Ainda temos horários disponiveis para hoje!";
    } else {
        saudacao = "🌙 Boa noite! Já agendou o banho do seu pet?";
    }

    // coloca o texto no site
    if (elementomensagem) {
        elementomensagem.innerHTML = `<strong>${saudacao}</strong>`;
    }
}

//click no botao do formulario
document.getElementById('formPetshop').addEventListener('submit', function(event) {
    event.preventDefault(); // trava a pagina pra gente conseguir ver o aviso
    
    const nomecliente = document.getElementById('nome').value;
    const nomepet = document.getElementById('nomePet').value;

    //janelinha de sucesso
    alert(`sucesso, ${nomecliente}! o agendamento para o(a) ${nomepet} foi recebido. entraremos em contato!`);
    
    this.reset(); // limpa o formulario pra ficar vazio de novo
});

// roda a saudacao assim que a pagina abre
window.onload = saudacaodinamica;