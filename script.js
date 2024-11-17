const btnNao = document.querySelector('.btn-nao');
const btnSim = document.querySelector('.btn-sim');
const conteudoPrincipal = document.getElementById('conteudo-principal');
const mensagemFinal = document.getElementById('mensagem-final');
let confeteIntervalo; // Variável para controlar o intervalo de confetes

// Função para gerar os confetes
function lançarConfetes() {
    if (typeof confetti === 'function') {
        // Dispara confetes continuamente
        confeteIntervalo = setInterval(() => {
            confetti({
                particleCount: 100,       // Quantidade de confetes
                angle: Math.random() * 360, // Ângulo aleatório para variação
                spread: 100,               // Distância do espalhamento
                origin: { x: Math.random(), y: Math.random() }, // Origem aleatória
                colors: ['#ff0000', '#ff6600', '#ffcc00', '#66cc00', '#3399ff', '#9900cc'], // Cores dos confetes
            });
        }, 200); // Intervalo de 200ms entre cada disparo de confetes
    }
}

// Função para parar os confetes
function pararConfetes() {
    clearInterval(confeteIntervalo); // Para o disparo contínuo de confetes
}

btnNao.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - btnNao.offsetWidth);
    const y = Math.random() * (window.innerHeight - btnNao.offsetHeight);
    btnNao.style.left = `${x}px`;
    btnNao.style.top = `${y}px`;
});

btnSim.addEventListener('click', () => {
    conteudoPrincipal.style.display = 'none'; // Esconde o conteúdo principal
    mensagemFinal.style.display = 'block';   // Mostra a mensagem final

    // Dispara os confetes de forma contínua
    lançarConfetes();
});

// Para os confetes quando a página for fechada ou escondida
window.addEventListener('beforeunload', pararConfetes);
