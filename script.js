$(document).ready(function() {
    $('#btNao button').on('mouseover', function() {
        const container = $('.botoes');

        const larguraContainer = container.width();
        const alturaContainer = container.height();

        const larguraBotao = $(this).outerWidth();
        const alturaBotao = $(this).outerHeight();

        const novaPosicaoX = Math.random() * (larguraContainer - larguraBotao);
        const novaPosicaoY = Math.random() * (alturaContainer - alturaBotao);

        $(this).css({
            position: 'absolute',
            left: novaPosicaoX + 'px',
            top: novaPosicaoY + 'px'
        });
    });
});