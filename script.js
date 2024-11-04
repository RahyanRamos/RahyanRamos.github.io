$(document).ready(function() {
    let posicaoAnteriorX = 0;
    let posicaoAnteriorY = 0;
    const distanciaMinima = 150;
    const gifPositions = [];

    $("#btNao").on("mouseover", function() {
        const container = $(".botoes");
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
            position: "absolute",
            left: novaPosicaoX + "px",
            top: novaPosicaoY + "px"
        });
    });

    $("#btSim").on("click", function() {
        $(".pergunta").css("display", "none");
        $(".botoes").css("display", "none");

        const gifs = [
            "https://media1.tenor.com/m/R7wWPCzS9PgAAAAd/shrek-green-lantern.gif",
            "https://media1.tenor.com/m/kglDzTqoEUAAAAAC/maxwell-cat.gif",
            "https://media1.tenor.com/m/AgeYHBN9m9EAAAAd/perro-brazil.gif",
            "https://media.tenor.com/kVLRfEhVYAwAAAAi/fuerza-gabriel-barbosa.gif",
            "https://media.tenor.com/wu-feCuQpQAAAAAi/neymar-ney.gif",
            "https://media.tenor.com/O7VXvlDQWbEAAAAi/excited-cat.gif",
            "https://media.tenor.com/UhqVAq_VjwUAAAAi/squibi-196.gif",
            "https://media.tenor.com/oyFfNb4Wj_cAAAAi/spongebob-dance-spongebob-joget.gif",
            "https://media.tenor.com/kQA86PqyXZQAAAAi/small-dancing-white-cat-dance-funny.gif",
            "https://media.tenor.com/h06DzEZ1neoAAAAi/dance-dog.gif"
        ];

        $("#gifsContainer").empty();
        gifPositions.length = 0;

        gifs.forEach(gif => {
            let novaPosicaoX, novaPosicaoY;
            let posicaoValida = false;

            while (!posicaoValida) {
                novaPosicaoX = Math.random() * ($(window).width() - 200);
                novaPosicaoY = Math.random() * ($(window).height() - 200);

                posicaoValida = gifPositions.every(pos => {
                    const distancia = Math.sqrt(Math.pow(novaPosicaoX - pos.x, 2) + Math.pow(novaPosicaoY - pos.y, 2));
                    return distancia > distanciaMinima;
                });
            }

            gifPositions.push({ x: novaPosicaoX, y: novaPosicaoY });

            $('#gifsContainer').append(`<img src="${gif}" alt="Meme GIF" style="position:absolute; left:${novaPosicaoX}px; top:${novaPosicaoY}px;">`);
        });
    });
});
