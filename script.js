$(document).ready(function() {
    let posicaoAnteriorX = 0;
    let posicaoAnteriorY = 0;
    const distanciaMinima = 150;

    $('#btNao').on('mouseover', function() {
        const container = $('.botoes');
        const larguraContainer = container.width();
        const alturaContainer = container.height();

        const larguraBotao = $(this).outerWidth();
        const alturaBotao = $(this).outerHeight();

        let novaPosicaoX, novaPosicaoY;
        let distancia;

        do {
            novaPosicaoX = Math.random() * (larguraContainer - larguraBotao);
            novaPosicaoY = Math.random() * (alturaContainer - alturaBotao);

            distancia = Math.sqrt(Math.pow(novaPosicaoX - posicaoAnteriorX, 2) + Math.pow(novaPosicaoY - posicaoAnteriorY, 2));
        } while (distancia < distanciaMinima);

        posicaoAnteriorX = novaPosicaoX;
        posicaoAnteriorY = novaPosicaoY;

        $(this).css({
            position: 'absolute',
            left: novaPosicaoX + 'px',
            top: novaPosicaoY + 'px'
        });
    });
});
