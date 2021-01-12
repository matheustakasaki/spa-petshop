


const corpoTabela = document.querySelector("[data-conteudo-tabela]");



const exibeCliente = (cpf, nome) => {
    const linha = document.createElement('tr');

    //Template literals para o navegador entender o html dentro da variável.
    const conteudoLinha =
    `
        <td>${cpf}</td>
        <td>${nome}</td>
    `

    linha.innerHTML = conteudoLinha;

    return linha;
}

listarClientes().then( exibe =>{
    exibe.forEach(indice => {
        corpoTabela.appendChild(exibeCliente( indice.cpf, indice.nome ));
    })
}
)
