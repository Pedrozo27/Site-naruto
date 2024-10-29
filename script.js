document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("gerarButton").addEventListener("click", gerarPersonagem);
});


const personagens = [
    { name: "Garra", image: "imagens/gaara.jpg" },
    { name: "Hinata", image: "imagens/hinata.jpg" },
    { name: "Itachi", image: "imagens/itachi.jpg" },
    { name: "Sasuke", image: "imagens/sasuke.jpg" },
    { name: "Naruto", image: "imagens/naruto.jpg" },
    { name: "Jiraiya", image: "imagens/jiraiya.jpg" },
    { name: "Sakura", image: "imagens/sakura.jpg" },
    { name: "Kakashi", image: "imagens/kakashi.jpg" },
];


async function gerarPersonagem() {
    var nomeTitular = document.getElementById("nomeTitular").value;
    var numeroCartao = document.getElementById("numeroCartao").value;
    var codigoSeguranca = document.getElementById("codigoSeguranca").value;

    
    if (nomeTitular.trim() === "") {
        document.getElementById("resultado").innerHTML = "Por favor, insira o nome do titular.";
        return;
    }

    
    if (numeroCartao.length !== 16 || isNaN(numeroCartao)) {
        document.getElementById("resultado").innerHTML = "Número do cartão inválido! Deve ter 16 dígitos.";
        return;
    }

    
    if (codigoSeguranca.length !== 3 || isNaN(codigoSeguranca)) {
        document.getElementById("resultado").innerHTML = "Código de segurança inválido! Deve ter 3 dígitos.";
        return;
    }

    
    var index = parseInt(numeroCartao[0]) % personagens.length;
    var personagem = personagens[index];
    var cla = personagem.name.split(" ")[1] || "N/A"; 
    var habilidade = "Habilidade Exemplo"; 
    var rank = "Ninja Genin"; 

    
    var resultado = `
        <h2>Seu Personagem</h2>
        <p><strong>Nome do Titular:</strong> ${nomeTitular}</p>
        <p><strong>Nome:</strong> ${personagem.name}</p>
        <p><strong>Clã:</strong> ${cla}</p>
        <p><strong>Habilidade:</strong> ${habilidade}</p>
        <p><strong>Rank Ninja:</strong> ${rank}</p>
        <img src="${personagem.image}" alt="${personagem.name}" class="img-fluid">
        <p><strong>Número do Cartão:</strong> ${numeroCartao}</p>
        <p><strong>Código de Segurança:</strong> ${codigoSeguranca}</p>
    `;
    document.getElementById("resultado").innerHTML = resultado;
}
