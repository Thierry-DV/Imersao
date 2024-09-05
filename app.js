function pesquisar() {
    let input = document.querySelector('input').value.toLowerCase(); // Captura o valor do input
    let section = document.getElementById("resultados-pesquisa");

    let resultados = "";

    for (let dado of dados) {
        // Verifica se o título do dado contém o texto digitado pelo usuário
        if (dado.titulo.toLowerCase().includes(input)) {
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href=${dado.instagram} target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Liquipedia</a>
            </div>`;
        }
    }

    if (resultados === "") {
        resultados = `<p>Nenhum resultado encontrado</p>`;
    }

    section.innerHTML = resultados;
}


window.addEventListener("scroll", function() {
    let footer = document.querySelector("footer");
    
    // Verifica se o usuário chegou ao final da página
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        footer.style.display = "block"; // Mostra o rodapé
    } else {
        footer.style.display = "none";  // Esconde o rodapé enquanto não estiver no final
    }
});
    
    
    
    