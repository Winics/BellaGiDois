document.addEventListener("DOMContentLoaded", function () {
    const botoes = document.querySelectorAll(".button");

    botoes.forEach(botao => {
        botao.addEventListener("click", function () {
            let produto = botao.closest(".produto"); // Encontra o contêiner do produto
            let modelo = produto.getAttribute("data-modelo"); // Obtém o modelo do produto
            let preco = produto.querySelector("p").innerText.replace("Preço: ", ""); // Obtém o preço
            imagemUrl = "https://bella-gi-dois-oer927zq0-winics-projects.vercel.app/images/catalogo/calcinha1.jpg"; // Link da imagem

            let mensagem = `Olá! Estou interessado no modelo: ${modelo}, que custa ${preco}. Veja a imagem aqui: ${imagemUrl}`;
            let numero = "41991902924"; // Seu número com DDD
            let url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

            window.open(url, "_blank"); // Abre o WhatsApp
        });
    });
});

