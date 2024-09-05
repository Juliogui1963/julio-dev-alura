
function pesquisar(){
    
    let section = document.getElementById("resultados-pesquisa")

    console.log(section);

    let resultados = ""

    for (let dado of dados){

        section.innerHTML += `
        <div class="item-resultado">
            <h2>
                <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p>${dado.descrição}</p>
            <a href="${dado.link}" target="_blank"
            alt="Saiba mais sobre a carreira de Rayssa Leal na Wikipédia">Saiba mais sobre sua carreira...</a>
        </div>
    `
    }

    section.innerHTML(resultados)

    
}
//console.log(dados);



    