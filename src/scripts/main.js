document.getElementById("whatsappButton").addEventListener("click", function () {
    let modelo = "Calcinha1"; // Nome do modelo
    let imagemUrl = "https://exemplo.com/calcinha1.jpg"; // Link da imagem
    let mensagem = `Olá! Estou interessado no modelo: ${modelo}. Veja a imagem aqui: ${imagemUrl}`;

    let numero = "41991902924"; // Seu número com DDD
    let url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank"); // Abre o WhatsApp
});

document.addEventListener("DOMContentLoaded", function () {
    const celulares = document.querySelectorAll(".celular");
    celulares.forEach(celular => {
        celular.addEventListener("click", () => {
            alert(`Você selecionou o modelo: ${celular.dataset.modelo}`);
        });
    });
});
